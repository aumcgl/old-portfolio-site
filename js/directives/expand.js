function toggle(tablename, idName) {
    table = document.getElementById(tablename);
    for (var i = 0, row; row = table.rows[i]; i++) {
        if(row.id === idName){
            if(row.style.display=='none'){
                row.style.display = 'table-row';
            }
            else{
                row.style.display = 'none';
            }
        }
    }
}