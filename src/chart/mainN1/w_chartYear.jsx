import React, { Component, PropTypes } from 'react';

import {
   Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide, Facet, View, G2, Shape, Util
} from 'bizcharts';

import { GetDateYMD_moment } from '../../core/core_Function.jsx';

import DataSet from "@antv/data-set";
import moment from 'moment';

function Get_DataTodata(data, _curentDate) {
   let dataDate = null;
   for (const item of data) {
      //let cur = GetDateYMD_moment(curentDate);
      let R = GetDateYMD_moment(moment(item.ent_time_grp));
      if (_curentDate == R) {
         dataDate = { ent_time_grp: R, incidents: item.incidents }
         break;
      };
      if (R > _curentDate) {
         break;
      }
   }
   return dataDate;
}

function Get_DataChart(data) {
   let start = moment().startOf('month');
   let _start = GetDateYMD_moment(start);

   let end = moment().subtract(364, 'day').startOf('month').add(-1, 'days');
   let _end = GetDateYMD_moment(end);

   let curentDate = end;
   let _curentDate = _end;


   let _Data = new Array();
   if (data) {
      while (_curentDate < _start) {
         let dataDate = Get_DataTodata(data, _curentDate);
         if (dataDate != null) {
            _Data.push({
               ent_time_grp: dataDate.ent_time_grp,
               incidents: dataDate.incidents,
            });
         } else {
            _Data.push({
               ent_time_grp: _curentDate,
               incidents: 0,
            });

         }
         curentDate = curentDate.add(1, 'days');
         _curentDate = GetDateYMD_moment(curentDate);
      }
   }
   _Data.sort(compare_YMD);
   //_Data.sort(compare_DATE);
   return _Data;
}
function compare_DATE(a, b) {
   if (a != null && b != null) {
      if (a.ent_time_grp > b.ent_time_grp) return 1;
      if (a.ent_time_grp < b.ent_time_grp) return -1;
   }
}
function compare_YMD(a, b) {
   if (a != null && b != null) {
      if (a.ent_time_grp > b.ent_time_grp) return -1;
      if (a.ent_time_grp < b.ent_time_grp) return 1;
   }
}

function Get_Max(data) {
   let r = 0;
   if (data) {
      for (const item of data) {
         if (r < item.incidents) {
            r = item.incidents;
         }
      }
   }
   return r;
}


const _Debuge = true;
let data_save = [
   {
      "ent_time_grp": "2019-12-31",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-12-30",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-12-29",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-12-28",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-27",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-26",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-25",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-24",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-23",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-22",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-12-21",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-20",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-19",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-18",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-17",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-16",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-15",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-12-14",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-13",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-12",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-11",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-10",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-09",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-08",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-12-07",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-12-06",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-12-05",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-12-04",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-12-03",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-12-02",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-12-01",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-11-30",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-29",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-28",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-27",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-26",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-25",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-24",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-11-23",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-22",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-21",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-20",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-19",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-18",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-17",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-11-16",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-15",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-14",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-13",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-12",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-11",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-10",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-11-09",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-08",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-07",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-06",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-05",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-04",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-03",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-11-02",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-11-01",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-10-31",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-10-30",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-10-29",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-10-28",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-10-27",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-10-26",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-25",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-24",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-23",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-22",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-21",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-20",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-19",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-18",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-17",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-16",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-15",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-14",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-13",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-10-12",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-11",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-10",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-09",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-08",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-07",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-06",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-10-05",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-04",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-03",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-02",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-10-01",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-30",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-29",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-28",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-27",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-26",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-25",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-24",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-23",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-22",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-09-21",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-20",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-19",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-18",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-17",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-16",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-15",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-09-14",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-13",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-12",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-11",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-10",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-09",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-08",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-09-07",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-09-06",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-09-05",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-09-04",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-09-03",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-09-02",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-09-01",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-08-31",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-30",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-29",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-28",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-27",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-26",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-25",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-08-24",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-23",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-22",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-21",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-20",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-19",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-18",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-08-17",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-16",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-15",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-14",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-13",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-12",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-11",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-08-10",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-09",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-08",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-07",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-06",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-05",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-04",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-08-03",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-08-02",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-08-01",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-07-31",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-07-30",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-07-29",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-07-28",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-07-27",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-26",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-25",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-24",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-23",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-22",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-21",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-07-20",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-19",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-18",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-17",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-16",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-15",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-14",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-07-13",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-12",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-11",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-10",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-09",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-08",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-07",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-07-06",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-07-05",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-07-04",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-07-03",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-07-02",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-07-01",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-30",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-29",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-28",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-27",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-26",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-25",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-24",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-23",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-06-22",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-21",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-20",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-19",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-18",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-17",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-16",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-06-15",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-14",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-13",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-12",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-11",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-10",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-09",
      "incidents": 3
   },
   {
      "ent_time_grp": "2019-06-08",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-07",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-06",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-05",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-04",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-03",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-02",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-06-01",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-31",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-30",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-29",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-28",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-27",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-26",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-05-25",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-24",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-23",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-22",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-21",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-20",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-19",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-05-18",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-17",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-16",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-15",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-14",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-13",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-12",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-05-11",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-10",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-09",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-08",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-07",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-06",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-05",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-05-04",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-05-03",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-05-02",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-05-01",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-30",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-29",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-28",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-27",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-26",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-25",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-24",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-23",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-22",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-21",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-04-20",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-19",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-18",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-17",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-16",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-15",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-14",
      "incidents": 8
   },
   {
      "ent_time_grp": "2019-04-13",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-12",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-11",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-10",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-09",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-08",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-07",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-04-06",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-05",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-04",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-03",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-02",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-04-01",
      "incidents": 1
   },

   {
      "ent_time_grp": "2019-03-31",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-03-30",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-29",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-28",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-27",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-26",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-25",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-24",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-03-23",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-03-22",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-03-21",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-03-20",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-03-19",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-03-18",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-03-17",
      "incidents": 2
   },

   {
      "ent_time_grp": "2019-03-16",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-15",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-14",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-13",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-12",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-11",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-10",
      "incidents": 5
   },
   {
      "ent_time_grp": "2019-03-09",
      "incidents": 7
   },

   {
      "ent_time_grp": "2019-03-09",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-08",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-07",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-06",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-05",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-04",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-03",
      "incidents": 7
   },
   {
      "ent_time_grp": "2019-03-02",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-03-01",
      "incidents": 4
   },

   {
      "ent_time_grp": "2019-02-28",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-27",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-26",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-25",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-24",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-23",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-22",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-21",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-20",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-19",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-18",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-17",
      "incidents": 10
   },
   {
      "ent_time_grp": "2019-02-16",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-15",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-14",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-13",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-12",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-11",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-10",
      "incidents": 1
   },
   {
      "ent_time_grp": "2019-02-09",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-08",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-07",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-06",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-05",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-04",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-03",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-02-02",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-02-01",
      "incidents": 2
   },


   {
      "ent_time_grp": "2019-01-31",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-01-30",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-01-29",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-01-28",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-01-27",
      "incidents": 2
   },
   {
      "ent_time_grp": "2019-01-26",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-25",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-24",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-23",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-22",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-21",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-20",
      "incidents": 6
   },
   {
      "ent_time_grp": "2019-01-19",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-18",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-17",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-16",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-15",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-14",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-13",
      "incidents": 9
   },
   {
      "ent_time_grp": "2019-01-12",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-01-11",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-01-10",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-01-09",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-01-08",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-01-07",
      "incidents": 4
   },

   {
      "ent_time_grp": "2019-01-06",
      "incidents": 4
   },
   {
      "ent_time_grp": "2019-01-05",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-01-04",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-01-03",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-01-02",
      "incidents": 0
   },
   {
      "ent_time_grp": "2019-01-01",
      "incidents": 0
   }
]

export default class w_chartYear extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         Data: (this.props.Year_Incidents != null) ? this.props.Year_Incidents.sort(compare_DATE) : this.props.Year_Incidents,

      }
   }
   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
      if (this.props.Year_Incidents != prevProps.Year_Incidents) {
         this.setState({ Data: (this.props.Year_Incidents != null) ? this.props.Year_Incidents.sort(compare_DATE) : this.props.Year_Incidents });
      }
   }
   getMonthWeek(ent_time_grp) {
      const year = ent_time_grp.getFullYear();
      const month = ent_time_grp.getMonth();
      const monthFirst = new Date(year, month, 0);
      const intervalDays = Math.round(
         (ent_time_grp.getTime() - monthFirst.getTime()) / 86400000
      );
      const index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
      return index;
   }

   ClickDATE(v) {
      try {

         let endDate = moment(v.data._origin.ent_time_grp).endOf('month');

         let startDate = moment(v.data._origin.ent_time_grp).startOf('month');

         let NumberChart = 364;
         //alert("дате = " + v.data._origin.ent_time_grp + ", регион = " + this.props.start_region);

         //window.location.href = '/Main_N&' + this.props.start_region;// +'&'+ v.data._origin.ent_time_grp;

         this.props.updateData({ startDate, endDate, NumberChart }, this.props.history.push('/Main_N&' + this.props.start_region));


         //alert(v.data._origin.name + " " + v.data._origin.id);
         //window.location.href = '/Main_N' + '&' + v.data._origin.id;




      } catch (error) {
      }
   }
   render() {
      if (this.state.Data != null) {
         let _max = Get_Max(this.state.Data);
         const { DataView } = DataSet;
         const cols = {
            month: {
               type: "cat",
               values: [
                  "январь",
                  "февраль",
                  "март",
                  "апрель",
                  "май",
                  "июнь",
                  "июль",
                  "август",
                  "сентябрь",
                  "октябрь",
                  "ноябрь",
                  "декабрь"
               ]
            },
            incidents: {
               type: "linear",
               min: 0,
               max: _max,
               sync: true
            },
            week: {
               type: "cat",
               values: ["5", "4", "3", "2", "1", "0"]
            },
            day: {
               type: "cat"
            },
            ent_time_grp: {
               type: "time"
            },
            time: {
               type: "time"
            }
         };

         // Обработка данных
         // Увеличение прибыли, снижение
         // Добавление месяца, недели, недели каждого месяца
         /**/

         let data = Get_DataChart(this.state.Data);//data_save;// this.state.Data;//

         data.forEach((obj) => {
            const ent_time_grp = new Date(obj["ent_time_grp"]);
            const month = ent_time_grp.getMonth();
            obj.month = month;
            obj.day = ent_time_grp.getDay();
            obj.week = this.getMonthWeek(ent_time_grp).toString();
         }); // Сортировка данных

         const dv = new DataView();
         dv.source(data).transform({
            type: "sort-by",
            fields: ["day"],
            order: "DESC"
         });

         let _H = 600;
         let _H_L = 550;

        
         return (

            <div>

               <Chart
                  //height={window.innerHeight}
                  width={this.state.W_Width}
                  height={_H}
                  data={dv}
                  scale={cols}
                  forceFit
                  padding={[20, 120, 50, 120]}

                  onClick={ev => { this.ClickDATE(ev) }}
               >
                  <Tooltip title="ent_time_grp" />

                  <Axis name="id" visible={false} />
                  <Axis name="week" visible={false} />
                  <Axis name="day" visible={false} />
                  <Axis name="ent_time_grp" visible={false} />


                  <Legend name="incidents" useHtml={true} position="bottom"
                     offsetY={_H_L} offsetX={100}
                  />
                  <Facet
                     type="list"
                     fields={["month"]}
                     cols={3}
                     padding={[0, 15, 30, 15]}
                     colTitle={{
                        offsetY: -10,
                        style: {
                           fontSize: 14,
                           textAlign: "center",
                           fill: "#666"
                        }
                     }}
                  >

                     <View>
                        <Geom
                           type="polygon"
                           //position="day*week*ent_time_grp"
                           position="day*week*ent_time_grp"
                           style={{
                              lineWidth: 1,
                              stroke: "#fff"
                           }}
                           color={[
                              "incidents",
                              "#0086FA-#85C6FF-#E3F6FF-#FFF2D1-#FFBE15-#FA541C-#8f0309"
                              //"#0A61D7-#0086FA-#85C6FF-#E3F6FF-#FFF2D1-#FFBE15-#FA541C-#F51D27"
                              
                              //"#F51D27-#FA541C-#FFBE15-#FFF2D1-#E3F6FF-#85C6FF-#0086FA-#0A61D7"
                           ]}
                        />
                     </View>
                  </Facet>
               </Chart>
            </div>
         );
      } else {
         return <br />
      }
   }
}
