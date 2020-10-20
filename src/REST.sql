CREATE OR REPLACE PACKAGE REST AS 

  /* TODO enter package declarations (types, exceptions, methods etc) here */ 
  
    gv_package varchar2(100) := 'rest';
  
    procedure log_message (p_in_api_id number, p_in_payload in clob);
    
    function get_blog_text(p_in_id in number) return t_tblo_text pipelined;
    
    function get_blog_title return t_tblo_blogtitle pipelined;

END REST;
/


CREATE OR REPLACE PACKAGE BODY REST AS 

 

------------------------------------------------------------------------------
--  procedure: log_message
--  created:  Shazib Saleem warraich, 2020-10-18
--  desc:     log rest calls
--  used by:  called by rest related func and procs
------------------------------------------------------------------------------ 
procedure log_message (p_in_api_id number, p_in_payload in clob)
 is
    pragma autonomous_transaction;
    lv_module_name varchar2(64):= gv_package||'.log_message';
    
      begin 
                insert into rest_call_detail (api_id, api_payload) 
                       values(p_in_api_id, p_in_payload);
           commit;
           
end log_message;         

------------------------------------------------------------------------------
--  function: get_blog_text
--  created:  Shazib Saleem warraich, 2020-10-18
--  desc:     function returns blog text objects piplined
--  used by:  called by rest service text/aboutme
------------------------------------------------------------------------------  
function get_blog_text(p_in_id in number) return t_tblo_text pipelined
 as
 lv_module_name varchar2(100):= gv_package|| 'get_blog_text'; 
 lv_api_id number:= 1; 
 lv_payload clob;
 begin
       select  json_object('text_id' value lv_api_id,'text' value  text  format json)
                into lv_payload from blog_text where text_id = lv_api_id;
       
        for i in (select text_id, text from blog_text where text_id =  p_in_id) loop
            pipe row (t_text_obj(i.text_id, i.text));
            end loop;
            log_message (lv_api_id, lv_payload);
   return;
 
 end get_blog_text;
 
 ------------------------------------------------------------------------------
--  function: get_blog_title
--  created:  Shazib Saleem warraich, 2020-10-18
--  desc:     function returns blog title objects piplined
--  used by:  called by rest service blog/blogtitle
------------------------------------------------------------------------------  
  function get_blog_title return t_tblo_blogtitle pipelined
  is
  lv_module_name varchar2(100):= gv_package|| 'get_blog_title'; 
  lv_api_id number:= 2; 
  lv_payload clob;
 begin    
 
          select  json_object('api_id' value lv_api_id,'api_name' value  api_name  format json)
                into lv_payload from rest_api where api_id = lv_api_id;
            
        
        for i in ( select bf.blog_id blog_id, bt.title title, bt.created created, 
                      bt.link url, count(bf.blog_id) vote, round(avg(bf.rating),2) rating 
                        from blog_feedback bf
                        join blog_title bt 
                        on bf.blog_id = bt.title_id 
                        where bf.rating !=0
                             group by blog_id, bf.blog_id, bt.title, bt.created, bt.link
                             order by bt.created desc) loop
                        pipe row (t_blogtitle_obj(i.blog_id, i.title, i.created, i.url, i.vote, i.rating));
                 end loop;
            log_message (lv_api_id, lv_payload);
   return;
 
 end get_blog_title;

END REST;
/
