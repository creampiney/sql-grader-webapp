//const sqlite3 = require("sqlite3").verbose();
// import * as fs from 'fs';
import SQL from 'sql.js'
import ansData from './json/ansdata.json'

import fs from 'fs';

const SQLChecker = async (submitId, code) => {
  var ansData = require("./json/ansdata.json")

  var isErr = false;
  var errMessage = "";
  var isCorrect = false;

  //let db = new sqlite3.Database(`./db/${ansData[submitId].file}`, (err) => {
  

  //const dataPromise = fetch(`./db/${ansData[submitId].file}`).then(res => res.arrayBuffer());
  //const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  var data = fs.readFileSync(`./db/${ansData[submitId].file}`);
  //const db = new SQL.Database(new Uint8Array(dbfile));
  const db = new SQL.Database(data);

  
  /*
  var content = db.exec(`
    with q1 as (
        ${code}
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    , q2 as (
        ${ansData[submitId].answer}
    )
    , missing_from_q2 as (
        select *
        from (
            select * from q1 
            except 
            select * from q2
        )
    )
    , missing_from_q1 as (
        select *
        from (
            select * from q2 
            except
            select * from q1
        )
    )
    , union_error as (
    	select * from missing_from_q2
    	union all
    	select * from missing_from_q1
    )
    SELECT CASE WHEN COUNT(*) = 0 THEN 'Same' ELSE 'Different' END AS diff
    FROM
    union_error
  `, (err, row) => {
      if (err) {
        // Failed Query

        isErr = true;
        errMessage = err.message;

        var jsonData = {isErr : isErr,
          errMessage : errMessage,
          isCorrect : isCorrect,
          }

        console.log(jsonData);
      return jsonData;


      }
      else {
        // Success Query

        console.log(row.diff)
        
        if (row.diff === "Same") {
          isCorrect = true;
        }

        var jsonData = {isErr : isErr,
          errMessage : errMessage,
          isCorrect : isCorrect,
          }

        console.log(jsonData);
        return jsonData;
      }
  });
  */
  var content = db.exec(`
    with q1 as (
        ${code}
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    , q2 as (
        ${ansData[submitId].answer}
    )
    , missing_from_q2 as (
        select *
        from (
            select * from q1 
            except 
            select * from q2
        )
    )
    , missing_from_q1 as (
        select *
        from (
            select * from q2 
            except
            select * from q1
        )
    )
    , union_error as (
      select * from missing_from_q2
      union all
      select * from missing_from_q1
    )
    SELECT CASE WHEN COUNT(*) = 0 THEN 'Same' ELSE 'Different' END AS diff
    FROM
    union_error
  `).catch(err => {
    // Failed Query

    isErr = true;
    errMessage = err.message;

    var jsonData = {isErr : isErr,
      errMessage : errMessage,
      isCorrect : isCorrect,
      }

    console.log(jsonData);
    return jsonData;
  });
  console.log(content);

  // Success Query


        
  if (content.value[0][0] === "Same") {
    isCorrect = true;
  }

  var jsonData = {isErr : isErr,
    errMessage : errMessage,
    isCorrect : isCorrect,
    }

  console.log(jsonData);
  return jsonData;






}

export default SQLChecker