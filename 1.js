function graduates (students) {
    const result = {}
  
    for (const objekSiswa of students) {
      if (objekSiswa.score > 74) {
        if (result[objekSiswa['class']] === undefined) {
          result[objekSiswa['class']] = [];
        }
        
        result[objekSiswa['class']].push({name: objekSiswa['name'], score: objekSiswa['score']});
      }
    }
  
    return result;
  }