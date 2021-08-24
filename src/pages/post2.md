---
title: "SillyQL"
date: "Completed"
---
Goal: Create a database with a command line interface.
---
In this project, I was tasked with creating a relational database with a command-line interface.

The database stores data in multiple tables, each with a customizable number of rows and columns. 

Data can be added and retrieved with the use of a simplified version of SQL. Commands include PRINT 
(which displays certain figures in the terminal), INSERT (used to add rows),and CREATE 
(used to add tables to the workspace).

Certain commands support the modifier WHERE, along with operands <, >, and =, to specify desired data. 

For example, the command "PRINT FROM myTable 2 price model WHERE price < 100" would print the rows from "myTable" where 
the data in the "price" column is less than 100. The command specifies that only the "price" and "model" columns should 
be printed, in the order given by the command.

The JOIN command can be used to print certain rows from two tables based on parameters specified by the user. 
For example, "JOIN table1 AND table2 WHERE firstname = lastname AND PRINT 2 firstname 1 lastname 2" would 
print rows composed of columns "firstname" (table1) and "lastname" (table2) where the data from "firstname"" 
and "lastname" are equivalent. 

The default data structure for tables is a simple 2D vector. However, the user can generate an index on specific 
columns of a tableusing either a binary search tree (STL map) or hash map (STL unordered_map) to speed up searches on those columns.

For example, "GENERATE FOR myTable bst INDEX ON price" would create a map/bst containing the 
data within the "price" column of the table "myTable," speeding up future searches pertaining to that column.

The crux of this project was trying to balance speed and memory use. 

This project was written entirely in C++.

