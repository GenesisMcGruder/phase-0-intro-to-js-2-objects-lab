const employee = {
   name: "Ken",
   streetAddress: "6810 Homeslice Way",
}
function updateEmployeeWithKeyAndValue(employee,key,value) {
   const newEmployee = {...employee};
   newEmployee[key] = value
   return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
   employee[key] = value;
   return employee;
}
function deleteFromEmployeeByKey(employee,key) {
   const deleteEmployee = {...employee}
   delete deleteEmployee[key]; 
   return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
   delete employee[key];
   return employee;
}