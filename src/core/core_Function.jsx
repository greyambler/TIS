import React from "react"

import namor from "namor";



export function get_Date() {
   var date_Test = Array();

   date_Test[0] = { 'Datetime': '12.02.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '312022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '12.02.2019', 'TimeKey': '18:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 18, 'Duration': '00:00:55', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[1] = { 'Datetime': '16.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '116022019', 'CASHIER_ID': 10, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '16.02.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 10, 'Duration': '01:59:51', 'ratedFreq': 2, 'F': 2, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[2] = { 'Datetime': '18.02.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '118022019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '20.02.2019', 'TimeKey': '18:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '00:00:55', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[3] = { 'Datetime': '20.02.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '120022019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '20.02.2019', 'TimeKey': '18:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 5, 'Duration': '00:00:55', 'ratedFreq': 2, 'F': 2, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[4] = { 'Datetime': '21.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '121022019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '22.02.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 3, 'Duration': '01:59:51', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[5] = { 'Datetime': '21.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '121022019', 'CASHIER_ID': 10, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '22.02.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 10, 'Duration': '01:59:51', 'ratedFreq': 2, 'F': 2, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[6] = { 'Datetime': '24.02.2019 22:12:59', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '224022019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '02:10:50', 'Key': 123, 'DateKey': '25.02.2019', 'TimeKey': '20:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 2, 'Duration': '02:10:50', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[7] = { 'Datetime': '25.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '125022019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 5, 'Duration': '01:59:51', 'ratedFreq': 2, 'F': 2, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[8] = { 'Datetime': '26.02.2019 21:02:10', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '126022019', 'CASHIER_ID': 4, 'EVENT_NAME': 'Shutdown', 'Duration': '02:00:09', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:01', 'SHOP_NUM': 100, 'KASS_NUM': 2, 'CASHIER_ID': 4, 'Duration': '02:00:09', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[9] = { 'Datetime': '26.02.2019 21:04:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '126022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '02:01:51', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 18, 'Duration': '02:01:51', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[10] = { 'Datetime': '27.02.2019 21:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '127022019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:09:51', 'Key': 123, 'DateKey': '28.02.2019', 'TimeKey': '21:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '00:09:51', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[11] = { 'Datetime': '28.02.2019 12:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '128022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '10:09:51', 'Key': 123, 'DateKey': '01.03.2019', 'TimeKey': '02:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 18, 'Duration': '10:09:51', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[12] = { 'Datetime': '28.02.2019 23:22:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '128022019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:19:51', 'Key': 123, 'DateKey': '01.03.2019', 'TimeKey': '22:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 2, 'CASHIER_ID': 3, 'Duration': '01:19:51', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[13] = { 'Datetime': '01.03.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '101032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '02:09:51', 'Key': 123, 'DateKey': '02.03.2019', 'TimeKey': '20:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '02:09:51', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[14] = { 'Datetime': '02.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '102032019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '03.03.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 2, 'CASHIER_ID': 5, 'Duration': '01:59:51', 'ratedFreq': 2, 'F': 2, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[15] = { 'Datetime': '02.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '102032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '03.03.2019', 'TimeKey': '19:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 2, 'Duration': '01:59:51', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[16] = { 'Datetime': '04.03.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '104032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '02:09:51', 'Key': 123, 'DateKey': '05.03.2019', 'TimeKey': '20:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '02:09:51', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[17] = { 'Datetime': '05.03.2019 23:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '03:09:51', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '20:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 3, 'Duration': '03:09:51', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[18] = { 'Datetime': '05.03.2019 23:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '00:17:41', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '23:02:19', 'SHOP_NUM': 100, 'KASS_NUM': 2, 'CASHIER_ID': 5, 'Duration': '00:17:41', 'ratedFreq': 2, 'F': 2, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[19] = { 'Datetime': '05.03.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 9, 'EVENT_NAME': 'Shutdown', 'Duration': '00:01:51', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '21:18:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 9, 'Duration': '00:01:51', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[20] = { 'Datetime': '06.03.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '106032019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '00:29:51', 'Key': 123, 'DateKey': '07.03.2019', 'TimeKey': '21:42:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 18, 'Duration': '00:29:51', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[21] = { 'Datetime': '06.03.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '106032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:17:51', 'Key': 123, 'DateKey': '07.03.2019', 'TimeKey': '21:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 2, 'CASHIER_ID': 1, 'Duration': '00:17:51', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[22] = { 'Datetime': '09.03.2019 22:22:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '109032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '00:19:51', 'Key': 123, 'DateKey': '10.03.2019', 'TimeKey': '22:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 2, 'Duration': '00:19:51', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[23] = { 'Datetime': '10.03.2019 22:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '110032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '00:37:51', 'Key': 123, 'DateKey': '11.03.2019', 'TimeKey': '21:42:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 2, 'Duration': '00:37:51', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[24] = { 'Datetime': '12.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '112032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '08:59:51', 'Key': 123, 'DateKey': '12.03.2019', 'TimeKey': '12:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '08:59:51', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[25] = { 'Datetime': '12.03.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '112032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '13.03.2019', 'TimeKey': '22:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '00:59:51', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[26] = { 'Datetime': '13.03.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '113032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:07:51', 'Key': 123, 'DateKey': '14.03.2019', 'TimeKey': '21:12:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 3, 'Duration': '00:07:51', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[27] = { 'Datetime': '13.03.2019 21:25:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '113032019', 'CASHIER_ID': 6, 'EVENT_NAME': 'Shutdown', 'Duration': '00:23:00', 'Key': 123, 'DateKey': '14.03.2019', 'TimeKey': '21:02:00', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 6, 'Duration': '00:23:00', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[28] = { 'Datetime': '14.03.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '15.03.2019', 'TimeKey': '22:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 3, 'Duration': '00:59:51', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[29] = { 'Datetime': '20.03.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '21.03.2019', 'TimeKey': '22:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 3, 'Duration': '00:59:51', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[30] = { 'Datetime': '24.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:09:51', 'Key': 123, 'DateKey': '24.03.2019', 'TimeKey': '20:52:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 1, 'Duration': '00:09:51', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[31] = { 'Datetime': '25.03.2019 21:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '125032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:09:51', 'Key': 123, 'DateKey': '25.03.2019', 'TimeKey': '20:02:09', 'SHOP_NUM': 100, 'KASS_NUM': 1, 'CASHIER_ID': 3, 'Duration': '01:09:51', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   return date_Test;
}
export function Get_StartDate(CurentDate, Date_time) {
   if (CurentDate == null) {
      return Date_time;
   }
   else {
      const r_CurentDate = CurentDate.substring(3, 6) + CurentDate.substring(0, 2) + CurentDate.substring(5, CurentDate.length);
      const r_Date_time = Date_time.substring(3, 6) + Date_time.substring(0, 2) + Date_time.substring(5, Date_time.length);
      var D00 = new Date(r_CurentDate);
      var D01 = new Date(r_Date_time);
      var D0 = Date.parse(r_CurentDate);
      var D1 = Date.parse(r_Date_time);
      if (D0 >= D1) {
         return Date_time;
      }
      else {
         return CurentDate;
      }
   }
}
export function Get_StopDate(CurentDate, Date_time) {
   if (CurentDate == null) {
      return Date_time;
   }
   else {
      const r_CurentDate = CurentDate.substring(3, 6) + CurentDate.substring(0, 2) + CurentDate.substring(5, CurentDate.length);
      const r_Date_time = Date_time.substring(3, 6) + Date_time.substring(0, 2) + Date_time.substring(5, Date_time.length);
      var D00 = new Date(r_CurentDate);
      var D01 = new Date(r_Date_time);
      var D0 = Date.parse(r_CurentDate);
      var D1 = Date.parse(r_Date_time);
      if (D0 <= D1) {
         return Date_time;
      }
      else {
         return CurentDate;
      }
   }
}
export function GetDateNow() {
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth() + 1;
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = year + "-" + month + "-" + day;
   return today;
}
export function contains(arr, elem) {
   let Exist = false;
   if (arr != null && elem != null) {
      for (const iterator of arr) {
         Exist = (iterator.CASHIER_ID == elem);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}

export let dataStart = null;
export let dataStop = null;

export function GetDatFromColChart(data_DB){
   let dataCol_Char1 = Array();
   let t = 0;
   for (const element of data_DB) {
      let ttt = 0;
      dataStart = Get_StartDate(dataStart, element.Datetime);
      dataStop = Get_StopDate(dataStop, element.Datetime);

      let Cashier = "Кассир " + element.CASHIER_ID;
      if (!contains(dataCol_Char1, Cashier)) {

         dataCol_Char1[t] = { CASHIER_ID: Cashier, F: element.F, N: 1 };
         t++;
      }
      else {
         for (const iterator of dataCol_Char1) {
            if (iterator.CASHIER_ID == Cashier) {
               iterator.N = iterator.N + 1;
            }
         }
      }
   }
   return dataCol_Char1;
}
/******************************************************************/





const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;


export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;

