CREATE OR REPLACE PACKAGE LOGIC AS 


    /* 
     *- Created by Shazib Saleem Warraich 2020-12-27
     *- Package is created to keep the business logic 
     *- functions & procedures in this package will be
     *- consumed only to fetch data for rest webservices 
     */

    type dept_rec is record (
         empno      emp.empno%type
        ,ename      emp.ename%type 
        ,hiredate   emp.hiredate%type 
        ,dname      dept.dname%type
        ,job        emp.job%type
        ,salary     emp.salary%type
        ,location   dept.location%type
    );  

    type dept_rec_tbl is table of dept_rec;
    
    function get_rows_by_deptno (p_in_deptno in dept.deptno%type) return dept_rec_tbl;

END LOGIC;
/


CREATE OR REPLACE PACKAGE BODY LOGIC AS







  ------------------------------------------------------------------------------
  --  function:    get_rows_by_dname
  --  created by:  Shazib Saleem Warraich, 2020-12-27
  --  used by:     called by rest.webservice
  --  desc:        fetch rows by department name
  ------------------------------------------------------------------------------

 function get_rows_by_deptno (p_in_deptno in dept.deptno%type) return dept_rec_tbl
  is 
  lv_rows_by_dname dept_rec_tbl;

  begin

        select 
             empno,
             ename, 
             hiredate,
             dname, 
             job,  
             salary,
             location
         bulk collect into lv_rows_by_dname    
         from emp, dept  
         where emp.deptno = dept.deptno  
            and dept.deptno = p_in_deptno
            order by hiredate;
         
       return lv_rows_by_dname;  
       
 exception 
    when no_data_found then
        null;
    
  end get_rows_by_deptno;
  
  
  
  /*
  
  tescase
  set serveroutput on
declare
lv_rows_by_dname logic.dept_rec_tbl;
begin

  lv_rows_by_dname:=logic.dept_rec_tbl();
        lv_rows_by_dname:=logic.get_rows_by_dname(to_char('123'));


       for i in 1 .. lv_rows_by_dname.count
            loop
             
             dbms_output.put_line(lv_rows_by_dname(i).ename);            
                          
                
    end loop;  

end;
  
  */
  
END LOGIC;
/
