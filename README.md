# HaHacker-s-Hackaton

# DataBase structure: #
Tables and columns:
1. Orders - Primary key: Disease code + age(child/adult)
   1.1. Disease code (Input data)
   1.2. Age: child or adult (Input data)
   1.3. Order clause (point 1)
   1.4. Standard of care (point 4)
2. Criteria - Primary key: Order clause
   2.1. Order clause (from table: Orders)
   2.2. Evaluation criteria (point 2 and 3)
3. Service list - Primary key: Standard of care
   3.1. Standard of care (from table: Orders)
   3.2. Service list and their obligation and multiplicity (point 5 and 6)
   3.3. List of medications and their obligation and multiplicity (point 7 and 8)
   
## For user need get: ##
1. Standard of care (1.4)
2. Criteria (2.2)
3. Service list (3.2)
4. List of medications (3.3)
