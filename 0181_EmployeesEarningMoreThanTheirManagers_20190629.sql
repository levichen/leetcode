# Write your MySQL query statement below

SELECT Worker.Name AS Employee
FROM Employee as Worker, Employee as Manager
WHERE 
	Worker.ManagerId = Manager.Id AND 
    Worker.Salary > Manager.Salary;