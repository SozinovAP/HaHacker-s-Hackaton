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
3. Table services and medications - Primary key: Standard of care
   3.1. Standard of care (from table: Orders)
   3.2. Service list and their obligation and multiplicity (point 5 and 6)
   3.3. List of medications and their obligation and multiplicity (point 7 and 8)
4. Service list - Primary key: Code service 
   4.1. Code service
   4.2. Name service
5. Medications list - Primary key: Code service 
   5.1. Code medications
   5.2. Name medications
   
## For user need get: ##
1. Standard of care (1.4)
2. Criteria (2.2)
3. Service list (3.2) - transfer list of code to list of pair: code and  name services
4. List of medications (3.3) - transfer list of code to list of pair: code and  name medications
