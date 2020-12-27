CREATE OR REPLACE PACKAGE LOGIC AS 


    /* 
     *- Created by Shazib Saleem Warraich 2020-12-27
     *- Package is created to keep the business logic 
     *- functions & procedures in this package will be
     *- consumed by Rest webservices 
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
    
    function get_rows_by_dname (dName in dept.dname%type) return dept_rec_tbl;

END LOGIC;
/


CREATE OR REPLACE PACKAGE BODY LOGIC AS







  ------------------------------------------------------------------------------
  --  function:    get_rows_by_dname
  --  created by:  Shazib Saleem Warraich, 2020-12-27
  --  used by:     Called by rest.webservice
  --  desc:        fetch rows by department name
  ------------------------------------------------------------------------------

 function get_rows_by_dname (dName in dept.dname%type) return dept_rec_tbl
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
            and lower(dept.dname) = dName
             order by hiredate;
         
       return lv_rows_by_dname;  
 exception 
    when no_data_found then
        null;
    
  end get_rows_by_dname;
END LOGIC;
/
