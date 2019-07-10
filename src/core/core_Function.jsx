import React from "react";
import namor from "namor";
import moment from 'moment';
import 'moment/locale/ru';


export function get_Date() {
   var date_Test = Array();

   date_Test[0] = { 'Datetime': '12.02.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '312022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '12.02.2019', 'TimeKey': '18:02:09', 'ratedFreq': 4, 'F': 3, 'M': 1, 'Rang': 31, 'М2': 1, 'Rang2_bus': 31 };
   date_Test[1] = { 'Datetime': '16.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '116022019', 'CASHIER_ID': 10, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '16.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[2] = { 'Datetime': '18.02.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '118022019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '20.02.2019', 'TimeKey': '18:02:09', 'ratedFreq': 7, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[3] = { 'Datetime': '20.02.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '120022019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '20.02.2019', 'TimeKey': '18:02:09', 'ratedFreq': 2, 'F': 2, 'M': 1, 'Rang': 21, 'М2': 1, 'Rang2_bus': 21 };
   date_Test[4] = { 'Datetime': '21.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '121022019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '22.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 6, 'F': 4, 'M': 3, 'Rang': 43, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[5] = { 'Datetime': '21.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '121022019', 'CASHIER_ID': 10, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '22.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[6] = { 'Datetime': '24.02.2019 22:12:59', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '224022019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '02:10:50', 'Key': 123, 'DateKey': '25.02.2019', 'TimeKey': '20:02:09', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 34, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[7] = { 'Datetime': '25.02.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '125022019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[8] = { 'Datetime': '26.02.2019 21:02:10', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '126022019', 'CASHIER_ID': 4, 'EVENT_NAME': 'Shutdown', 'Duration': '02:00:09', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:01', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 14, 'М2': 3, 'Rang2_bus': 13 };
   date_Test[9] = { 'Datetime': '26.02.2019 21:04:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '126022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '02:01:51', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 34, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[10] = { 'Datetime': '27.02.2019 21:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '127022019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:09:51', 'Key': 123, 'DateKey': '28.02.2019', 'TimeKey': '21:02:09', 'ratedFreq': 7, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[11] = { 'Datetime': '28.02.2019 12:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '128022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '10:09:51', 'Key': 123, 'DateKey': '01.03.2019', 'TimeKey': '02:02:09', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 34, 'М2': 4, 'Rang2_bus': 34 };
   date_Test[12] = { 'Datetime': '28.02.2019 23:22:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '128022019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:19:51', 'Key': 123, 'DateKey': '01.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 1, 'F': 1, 'M': 3, 'Rang': 13, 'М2': 3, 'Rang2_bus': 13 };
   date_Test[13] = { 'Datetime': '01.03.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '101032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '02:09:51', 'Key': 123, 'DateKey': '02.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[14] = { 'Datetime': '02.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '102032019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '03.03.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[15] = { 'Datetime': '02.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '102032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '03.03.2019', 'TimeKey': '19:02:09', 'ratedFreq': 4, 'F': 3, 'M': 3, 'Rang': 33, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[16] = { 'Datetime': '04.03.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '104032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '02:09:51', 'Key': 123, 'DateKey': '05.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[17] = { 'Datetime': '05.03.2019 23:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '03:09:51', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[18] = { 'Datetime': '05.03.2019 23:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '00:17:41', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '23:02:19', 'ratedFreq': 2, 'F': 2, 'M': 1, 'Rang': 21, 'М2': 2, 'Rang2_bus': 22 };
   date_Test[19] = { 'Datetime': '05.03.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 9, 'EVENT_NAME': 'Shutdown', 'Duration': '00:01:51', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '21:18:09', 'ratedFreq': 1, 'F': 1, 'M': 1, 'Rang': 11, 'М2': 1, 'Rang2_bus': 11 };
   date_Test[20] = { 'Datetime': '06.03.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '106032019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '00:29:51', 'Key': 123, 'DateKey': '07.03.2019', 'TimeKey': '21:42:09', 'ratedFreq': 4, 'F': 3, 'M': 2, 'Rang': 32, 'М2': 2, 'Rang2_bus': 32 };
   date_Test[21] = { 'Datetime': '06.03.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '106032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:17:51', 'Key': 123, 'DateKey': '07.03.2019', 'TimeKey': '21:02:09', 'ratedFreq': 1, 'F': 1, 'M': 2, 'Rang': 12, 'М2': 2, 'Rang2_bus': 12 };
   date_Test[22] = { 'Datetime': '09.03.2019 22:22:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '109032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '00:19:51', 'Key': 123, 'DateKey': '10.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 4, 'F': 3, 'M': 2, 'Rang': 32, 'М2': 2, 'Rang2_bus': 32 };
   date_Test[23] = { 'Datetime': '10.03.2019 22:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '110032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '00:37:51', 'Key': 123, 'DateKey': '11.03.2019', 'TimeKey': '21:42:09', 'ratedFreq': 4, 'F': 3, 'M': 2, 'Rang': 32, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[24] = { 'Datetime': '12.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '112032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '08:59:51', 'Key': 123, 'DateKey': '12.03.2019', 'TimeKey': '12:02:09', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[25] = { 'Datetime': '12.03.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '112032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '13.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 7, 'F': 4, 'M': 2, 'Rang': 42, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[26] = { 'Datetime': '13.03.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '113032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:07:51', 'Key': 123, 'DateKey': '14.03.2019', 'TimeKey': '21:12:09', 'ratedFreq': 6, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[27] = { 'Datetime': '13.03.2019 21:25:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '113032019', 'CASHIER_ID': 6, 'EVENT_NAME': 'Shutdown', 'Duration': '00:23:00', 'Key': 123, 'DateKey': '14.03.2019', 'TimeKey': '21:02:00', 'ratedFreq': 1, 'F': 1, 'M': 2, 'Rang': 12, 'М2': 2, 'Rang2_bus': 12 };
   date_Test[28] = { 'Datetime': '14.03.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '15.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 6, 'F': 4, 'M': 2, 'Rang': 42, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[29] = { 'Datetime': '20.03.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '21.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 6, 'F': 4, 'M': 2, 'Rang': 42, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[30] = { 'Datetime': '24.03.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:09:51', 'Key': 123, 'DateKey': '24.03.2019', 'TimeKey': '20:52:09', 'ratedFreq': 7, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[31] = { 'Datetime': '25.03.2019 21:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '125032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:09:51', 'Key': 123, 'DateKey': '25.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 6, 'F': 4, 'M': 3, 'Rang': 43, 'М2': 3, 'Rang2_bus': 43 };


   date_Test[32] = { 'Datetime': '12.04.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '312022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '12.02.2019', 'TimeKey': '18:02:09', 'ratedFreq': 4, 'F': 3, 'M': 1, 'Rang': 31, 'М2': 1, 'Rang2_bus': 31 };
   date_Test[33] = { 'Datetime': '16.04.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '116022019', 'CASHIER_ID': 10, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '16.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[34] = { 'Datetime': '18.04.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '118022019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '20.02.2019', 'TimeKey': '18:02:09', 'ratedFreq': 7, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[35] = { 'Datetime': '20.04.2019 18:03:04', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '120022019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '00:00:55', 'Key': 123, 'DateKey': '20.02.2019', 'TimeKey': '18:02:09', 'ratedFreq': 2, 'F': 2, 'M': 1, 'Rang': 21, 'М2': 1, 'Rang2_bus': 21 };
   date_Test[36] = { 'Datetime': '21.04.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '121022019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '22.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 6, 'F': 4, 'M': 3, 'Rang': 43, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[37] = { 'Datetime': '21.04.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '121022019', 'CASHIER_ID': 10, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '22.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[38] = { 'Datetime': '24.04.2019 22:12:59', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '224022019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '02:10:50', 'Key': 123, 'DateKey': '25.02.2019', 'TimeKey': '20:02:09', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 34, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[39] = { 'Datetime': '25.04.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '125022019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[40] = { 'Datetime': '26.04.2019 21:02:10', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '126022019', 'CASHIER_ID': 4, 'EVENT_NAME': 'Shutdown', 'Duration': '02:00:09', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:01', 'ratedFreq': 1, 'F': 1, 'M': 4, 'Rang': 14, 'М2': 3, 'Rang2_bus': 13 };
   date_Test[41] = { 'Datetime': '26.04.2019 21:04:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '126022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '02:01:51', 'Key': 123, 'DateKey': '26.02.2019', 'TimeKey': '19:02:09', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 34, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[42] = { 'Datetime': '27.04.2019 21:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '127022019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:09:51', 'Key': 123, 'DateKey': '28.02.2019', 'TimeKey': '21:02:09', 'ratedFreq': 7, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[43] = { 'Datetime': '28.04.2019 12:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '128022019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '10:09:51', 'Key': 123, 'DateKey': '01.03.2019', 'TimeKey': '02:02:09', 'ratedFreq': 4, 'F': 3, 'M': 4, 'Rang': 34, 'М2': 4, 'Rang2_bus': 34 };
   date_Test[44] = { 'Datetime': '28.04.2019 23:22:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '128022019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:19:51', 'Key': 123, 'DateKey': '01.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 1, 'F': 1, 'M': 3, 'Rang': 13, 'М2': 3, 'Rang2_bus': 13 };
   date_Test[45] = { 'Datetime': '01.05.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '101032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '02:09:51', 'Key': 123, 'DateKey': '02.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[46] = { 'Datetime': '02.05.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '102032019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '03.03.2019', 'TimeKey': '19:02:09', 'ratedFreq': 2, 'F': 2, 'M': 3, 'Rang': 23, 'М2': 3, 'Rang2_bus': 23 };
   date_Test[47] = { 'Datetime': '02.05.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '102032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '01:59:51', 'Key': 123, 'DateKey': '03.03.2019', 'TimeKey': '19:02:09', 'ratedFreq': 4, 'F': 3, 'M': 3, 'Rang': 33, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[48] = { 'Datetime': '04.05.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '104032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '02:09:51', 'Key': 123, 'DateKey': '05.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[49] = { 'Datetime': '05.05.2019 23:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '03:09:51', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 6, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[50] = { 'Datetime': '05.05.2019 23:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 5, 'EVENT_NAME': 'Shutdown', 'Duration': '00:17:41', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '23:02:19', 'ratedFreq': 2, 'F': 2, 'M': 1, 'Rang': 21, 'М2': 2, 'Rang2_bus': 22 };
   date_Test[51] = { 'Datetime': '05.05.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '105032019', 'CASHIER_ID': 9, 'EVENT_NAME': 'Shutdown', 'Duration': '00:01:51', 'Key': 123, 'DateKey': '06.03.2019', 'TimeKey': '21:18:09', 'ratedFreq': 1, 'F': 1, 'M': 1, 'Rang': 11, 'М2': 1, 'Rang2_bus': 11 };
   date_Test[52] = { 'Datetime': '06.05.2019 22:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '106032019', 'CASHIER_ID': 18, 'EVENT_NAME': 'Shutdown', 'Duration': '00:29:51', 'Key': 123, 'DateKey': '07.03.2019', 'TimeKey': '21:42:09', 'ratedFreq': 4, 'F': 3, 'M': 2, 'Rang': 32, 'М2': 2, 'Rang2_bus': 32 };
   date_Test[53] = { 'Datetime': '06.05.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 2, 'SHIFT_NUM': '106032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:17:51', 'Key': 123, 'DateKey': '07.03.2019', 'TimeKey': '21:02:09', 'ratedFreq': 1, 'F': 1, 'M': 2, 'Rang': 12, 'М2': 2, 'Rang2_bus': 12 };
   date_Test[54] = { 'Datetime': '09.05.2019 22:22:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '109032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '00:19:51', 'Key': 123, 'DateKey': '10.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 4, 'F': 3, 'M': 2, 'Rang': 32, 'М2': 2, 'Rang2_bus': 32 };
   date_Test[55] = { 'Datetime': '10.05.2019 22:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '110032019', 'CASHIER_ID': 2, 'EVENT_NAME': 'Shutdown', 'Duration': '00:37:51', 'Key': 123, 'DateKey': '11.03.2019', 'TimeKey': '21:42:09', 'ratedFreq': 4, 'F': 3, 'M': 2, 'Rang': 32, 'М2': 3, 'Rang2_bus': 33 };
   date_Test[56] = { 'Datetime': '12.05.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '112032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '08:59:51', 'Key': 123, 'DateKey': '12.03.2019', 'TimeKey': '12:02:09', 'ratedFreq': 7, 'F': 4, 'M': 4, 'Rang': 44, 'М2': 4, 'Rang2_bus': 44 };
   date_Test[57] = { 'Datetime': '12.05.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '112032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '13.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 7, 'F': 4, 'M': 2, 'Rang': 42, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[58] = { 'Datetime': '13.05.2019 21:20:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '113032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:07:51', 'Key': 123, 'DateKey': '14.03.2019', 'TimeKey': '21:12:09', 'ratedFreq': 6, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[59] = { 'Datetime': '13.05.2019 21:25:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '113032019', 'CASHIER_ID': 6, 'EVENT_NAME': 'Shutdown', 'Duration': '00:23:00', 'Key': 123, 'DateKey': '14.03.2019', 'TimeKey': '21:02:00', 'ratedFreq': 1, 'F': 1, 'M': 2, 'Rang': 12, 'М2': 2, 'Rang2_bus': 12 };
   date_Test[60] = { 'Datetime': '14.05.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '15.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 6, 'F': 4, 'M': 2, 'Rang': 42, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[61] = { 'Datetime': '20.05.2019 23:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '00:59:51', 'Key': 123, 'DateKey': '21.03.2019', 'TimeKey': '22:02:09', 'ratedFreq': 6, 'F': 4, 'M': 2, 'Rang': 42, 'М2': 3, 'Rang2_bus': 43 };
   date_Test[62] = { 'Datetime': '24.05.2019 21:02:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '114032019', 'CASHIER_ID': 1, 'EVENT_NAME': 'Shutdown', 'Duration': '00:09:51', 'Key': 123, 'DateKey': '24.03.2019', 'TimeKey': '20:52:09', 'ratedFreq': 7, 'F': 4, 'M': 1, 'Rang': 41, 'М2': 1, 'Rang2_bus': 41 };
   date_Test[63] = { 'Datetime': '25.05.2019 21:12:00', 'EVENT_TYPE': 122, 'SHOP_NUM': 100, 'KASS_NUM': 1, 'SHIFT_NUM': '125032019', 'CASHIER_ID': 3, 'EVENT_NAME': 'Shutdown', 'Duration': '01:09:51', 'Key': 123, 'DateKey': '25.03.2019', 'TimeKey': '20:02:09', 'ratedFreq': 6, 'F': 4, 'M': 3, 'Rang': 43, 'М2': 3, 'Rang2_bus': 43 };

   return date_Test;
}
export function get_Date_Filter(data, S_date, E_date) {
   var date_Test = Array();
   let r = 0;
   if (S_date != null && E_date != null)
      for (const iterator of data) {
         const r_CurentDate = iterator.Datetime.substring(3, 6) + iterator.Datetime.substring(0, 2) + iterator.Datetime.substring(5, 10);

         //+ iterator.Datetime.substring(5, iterator.Datetime.length);
         //const r_CurentKey = iterator.DateKey.substring(3, 6) + iterator.DateKey.substring(0, 2) + iterator.DateKey.substring(5, iterator.DateKey.length);

         var D00 = new Date(r_CurentDate);
         var D0 = Date.parse(D00);
         var D01 = Date.parse(S_date.format('MM/DD/YYYY'));
         var D02 = Date.parse(E_date.format('MM/DD/YYYY'));

         if (D01 <= D0 && D0 <= D02) {
            date_Test[r] = iterator;
            r++;
         }
      }
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
export function StartDate_Big_EndDate(startDate, endDate) {
   if (endDate == null) {
      return false;
   }
   else {
      let S_yyyy = +startDate.substring(0, 4)
      let E_yyyy = +endDate.substring(0, 4)
      if (S_yyyy > E_yyyy) {
         return true;
      }
      else if (S_yyyy < E_yyyy) {
         return false;
      }
      else {
         let S_mm = +startDate.substring(5, 7)
         let E_mm = +endDate.substring(5, 7)
         if (S_mm > E_mm) {
            return true;
         }
         else if (S_mm < E_mm) {
            return false;
         }
         else {
            let S_dd = +startDate.substring(8, 10)
            let E_dd = +endDate.substring(8, 10)
            if (S_dd > E_dd) {
               return true;
            } else {
               return false;
            }
         }
      }
   }
}
export function Get_Date_String(Date_String) {

   const CurentDate = Date_String.substring(3, 6) + Date_String.substring(0, 2) + Date_String.substring(5, Date_String.length);

   return CurentDate;
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
export function GetDatePlusDay(_date) {
   var date = new Date(_date);
   var day = date.getDate() + 1;
   var month = date.getMonth() + 1;
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = year + "-" + month + "-" + day;
   return today;
}
export function GetDateNowSl() {
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth() + 1;
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = year + "/" + month + "/" + day;
   return today;
}
export function GetDateYMD_moment(_moment) {
   if (_moment != null) {
      var day = _moment.date();
      var month = _moment.month() + 1;
      var year = _moment.year();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      var today = year + "-" + month + "-" + day;

      return today;
   }
   else {
      return GetDateNow();
   }
}
export function D1_D1_Eq_moment(_M1, _M2) {
   if (_M1 != null && _M2 != null) {
      try {
         var d1 = _M1.date();
         var m1 = _M1.month();
         var y1 = _M1.year();

         var d2 = _M2.date();
         var m2 = _M2.month();
         var y2 = _M2.year();

         if ((y1 == y2) && (m1 == m2) && (d1 == d2)) {
            return true;
         }
      }
      catch{ }
   }
   return false;
}
export function GetDateDMY_moment(_moment) {
   if (_moment != null) {
      var day = _moment.date();
      var month = _moment.month();
      var year = _moment.year();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      var today = day + "/" + month + "/" + year;
      return today;
   }
   else {
      return GetDateNow();
   }
}
export function Get_RSS(Rss, startDate, endDate, needCode) {
   var rss = Rss;
   if (startDate != null && endDate != null) {
      let IsOne = D1_D1_Eq_moment(startDate, endDate);
      if (IsOne) {
         rss = rss + "?date=" + GetDateYMD_moment(startDate);
      }
      else {
         rss = rss + "?from="
            + GetDateYMD_moment(startDate)
            + "&to="
            + GetDateYMD_moment(endDate);
      }
   }
   if (needCode != null) {
      if (rss.includes('?')) {
         rss = rss + "&event=" + needCode;
      } else {
         rss = rss + "?event=" + needCode;
      }
   }
   return rss;
}
export function GetDateNowDMY() {
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth() + 1;
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = day + "." + month + "." + year;
   return today;
}
export function contains(arr, elem) {
   let Exist = false;
   if (arr != null && elem != null) {
      for (const iterator of arr) {
         Exist = (iterator.n == elem);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}
export function contains_Mouth(arr, elem) {
   let Exist = false;
   if (arr != null && elem != null) {
      for (const iterator of arr) {
         Exist = (iterator.date == elem);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}
export function contains_AZS(arr, elem) {
   let Exist = false;
   if (arr != null && elem != null) {
      for (const iterator of arr) {
         Exist = (iterator.n == elem);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}
export function contains_CODE(arr, elem) {
   let Exist = false;
   if (arr != null && elem != null) {
      for (const iterator of arr) {
         Exist = (iterator.n == elem);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}
export function contains_KASS(arr, elem) {
   let Exist = false;
   if (arr != null && elem != null) {
      for (const iterator of arr) {
         Exist = (iterator.n == elem);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}

export let dateStart = null;
export let dateStop = null;

export function GetDatFromColChart(data_DB) {
   let dataCol_Char1 = Array();
   let t = 0;
   for (const element of data_DB) {
      let code = element.CASHIER_ID;
      if (!contains(dataCol_Char1, code)) {
         dataCol_Char1[t] = { n: code, CASHIER_ID: "" + code + "", F: element.F, sales: 1 };
         t++;
      } else {
         for (const iterator of dataCol_Char1) {
            if (iterator.n == code) {
               iterator.sales = iterator.sales + 1;
            }
         }
      }
   }
   return dataCol_Char1.sort(compare_N);
}
function compare_N(a, b) {
   if (a.n > b.n) return 1;
   if (a.n < b.n) return -1;
}

export function GetFilterData_Cashir(data_DB, n_Cashir) {
   let data_db = null;
   if (data_DB) {
      data_db = Array();
      let t = 0;
      for (const element of data_DB) {
         if (n_Cashir == element.CASHIER_ID) {
            data_db[t] = element;
            t++;
         }
      }
   }
   return data_db;
}

export function GetDatFromColChart_month(data_DB) {
   let dataCol_Char1 = Array();
   let t = 0;
   for (const element of data_DB) {
      let date = moment(element.Datetime.toString()).local('ru').format('MM/YYYY');

      if (!contains_Mouth(dataCol_Char1, date)) {
         dataCol_Char1[t] = { date: date, sales: 1, norm: 2 };
         t++;
      } else {
         for (const iterator of dataCol_Char1) {
            if (iterator.date == date) {
               iterator.sales = iterator.sales + 1;
            }
         }
      }
   }
   return dataCol_Char1.sort(compareDate);
}
function compareDate(a, b) {
   if (a.date > b.date) return 1;
   if (a.date < b.date) return -1;
}

export function GetFilterData_Month(data_DB, n_Month) {
   let data_db = null;
   if (data_DB) {
      data_db = Array();
      let t = 0;
      for (const element of data_DB) {
         let date = moment(element.Datetime.toString()).local('ru').format('MM/YYYY');
         if (n_Month == date) {
            data_db[t] = element;
            t++;
         }
      }
   }
   return data_db;
}
export function GetDatFromColChart_AZS(data_DB) {
   let dataCol_Char1 = Array();
   let t = 0;
   for (const element of data_DB) {
      let code = element.SHOP_NUM;
      if (!contains_AZS(dataCol_Char1, code)) {
         dataCol_Char1[t] = { n: code, azs: "" + code + "", sales: 1 };
         t++;
      } else {
         for (const iterator of dataCol_Char1) {
            if (iterator.n == code) {
               iterator.sales = iterator.sales + 1;
            }
         }
      }
   }
   return dataCol_Char1.sort(compare_N);
}


export function GetFilterData_AZS(data_DB, n_AZS) {
   let data_db = null;
   if (data_DB) {
      data_db = Array();
      let t = 0;
      for (const element of data_DB) {
         if (n_AZS == element.SHOP_NUM) {
            data_db[t] = element;
            t++;
         }
      }
   }
   return data_db;
}
export function GetDatFromColChart_CODE(data_DB) {
   let dataCol_Char1 = Array();
   let t = 0;
   for (const element of data_DB) {
      let code = element.EVENT_TYPE;
      if (!contains_CODE(dataCol_Char1, code)) {
         dataCol_Char1[t] = { n: code, azs: "" + code + "", sales: 1 };
         t++;
      } else {
         for (const iterator of dataCol_Char1) {
            if (iterator.n == code) {
               iterator.sales = iterator.sales + 1;
            }
         }
      }
   }
   return dataCol_Char1;
}
export function GetFilterData_CODE(data_DB, n_Code) {
   let data_db = null;
   if (data_DB) {
      data_db = Array();
      let t = 0;
      for (const element of data_DB) {
         if (n_Code == element.EVENT_TYPE) {
            data_db[t] = element;
            t++;
         }
      }
   }
   return data_db;
}
export function GetDatFromColChart_KASS(data_DB) {
   let dataCol_Char1 = Array();
   let t = 0;
   for (const element of data_DB) {
      let code = element.KASS_NUM;
      if (!contains_KASS(dataCol_Char1, code)) {
         dataCol_Char1[t] = { n: code, KASS_NUM: "" + code + "", sales: 1 };
         t++;
      } else {
         for (const iterator of dataCol_Char1) {
            if (iterator.n == code) {
               iterator.sales = iterator.sales + 1;
            }
         }
      }
   }
   return dataCol_Char1.sort(compare_N);
}
export function GetFilterData_Kassa(data_DB, n_Kass) {
   let data_db = null;
   if (data_DB) {
      data_db = Array();
      let t = 0;
      for (const element of data_DB) {
         if (n_Kass == element.KASS_NUM) {
            data_db[t] = element;
            t++;
         }
      }
   }
   return data_db;
}

export function GetFilterData_Equip(data_DB, n_Equip) {
   let data_db = null;
   if (data_DB) {
      data_db = Array();
      let t = 0;
      for (const element of data_DB) {
         if (n_Equip == element.DEVICE_TYPE) {
            data_db[t] = element;
            t++;
         }
      }
   }
   return data_db;
}

export function IsExist_Filter(filterArray, filterNew) {
   let isExist = false;
   if (filterArray != null) {
      for (const iterator of filterArray) {
         if (iterator == filterNew) {
            isExist = true;
            break;
         }
      }
   }
   return isExist;
}
export function Delete_Item_Filter(filterArray, filterNew) {
   let NewfilterArray = new Array();
   let t = 0;
   if (filterArray != null) {
      for (const iterator of filterArray) {
         if (iterator != filterNew) {
            NewfilterArray[t] = iterator;
            t++;
         }
      }
   }
   return NewfilterArray;
}

/******************************************************************/
export function contains_device(arr, _equip, _month) {
   let Exist = false;
   if (arr != null && _equip != null && _month != "") {
      for (const iterator of arr) {
         Exist = (iterator.equip == _equip && iterator.month  == _month);
         if (Exist) {
            break;
         }
      }
   }
   return Exist;
}
function get_Name_DEVICE(_code){
switch (_code) {
   case 1: return "ФР";
   case 2: return "ТУ";
   case 4: return "ТРК";
   case 7: return "Дисплей";
   default:
      return "_";
}
}


export function GetDatFromErrorEqv(data_DB, period) {
   let dataCol_Char1 = new Array();
   let t = 0;
   for (const element of data_DB) {
      let code = get_Name_DEVICE(element.DEVICE_TYPE);
      
      let _month = moment(element.Datetime).local('ru').format('MM/YYYY');
      switch(period){
         case "day":_month = moment(element.Datetime).local('ru').format('DD/MM/YYYY');break;
         case "month":_month = moment(element.Datetime).local('ru').format('MM/YYYY');break;
         default:_month = moment(element.Datetime).local('ru').format('MM/YYYY');break;

      }
      if (!contains_device(dataCol_Char1, code, _month)) {
         //dataCol_Char1[t] = { n: code, CASHIER_ID: "" + code + "", F: element.F, sales: 1 };
         
         dataCol_Char1[t] = {month: _month, equip: code.toString(), value: 1 , DEVICE_TYPE :element.DEVICE_TYPE,EVENT_TYPE:element.EVENT_TYPE};
         t++;
      } else {
         for (const iterator of dataCol_Char1) {
            if (iterator.equip == code && iterator.month  == _month) {
               iterator.value = iterator.value + 1;
            }
         }
      }
   }
   /*
      {
         month: "Янв",
         equip: "ТРК",
         value: 37
      },
   */
   return dataCol_Char1.sort(compare_Date);
}
function compare_Date(a, b) {
   if (a.month > b.month) return 1;
   if (a.month < b.month) return -1;
}
export function GetDatFromErrorEqv_TEST(data_DB) {
   /*
   let data = [
      {
         month: "Янв.",
         ТРК: 7.0,
         ФР: 7.0,
         ТУ: 23.9
      },
      {
         month: "Фев.",
         ТРК: 3.0,
         ФР: 6.9,
         ТУ: 24.2
      },
      {
         month: "Мар.",
         ТРК: 4.0,
         ФР: 9.5,
         ТУ: 21.7
      },
      {
         month: "Апр.",
         ТРК: 7.0,
         ФР: 16.5,
         ТУ: 18.5
      },
      {
         month: "Май.",
         ТРК: 8.0,
         ФР: 22.4,
         ТУ: 15.9
      },
      {
         month: "Июн.",
         ТРК: 6.0,
         ФР: 17.5,
         ТУ: 18.2
      },
      {
         month: "Июл.",
         ТРК: 7.0,
         ФР: 12.2,
         ТУ: 19.0
      },
      {
         month: "Авг.",
         ТРК: 4.0,
         ФР: 17.5,
         ТУ: 17.6
      },
      {
         month: "Сен.",
         ТРК: 3.0,
         ФР: 21.3,
         ТУ: 14.2
      },
      {
         month: "Окт.",
         ТРК: 5.0,
         ФР: 22.3,
         ТУ: 10.3
      },
      {
         month: "Ноя.",
         ТРК: 7.0,
         ФР: 23.9,
         ТУ: 6.6
      },
      {
         month: "Дек.",
         ТРК: 3.0,
         ФР: 29.6,
         ТУ: 4.8
      }
   ];
   */
   const data = [
      {
         month: "Янв",
         equip: "ТРК",
         value: 37
      },
      {
         month: "Фев",
         equip: "ТРК",
         value: 19.2
      },
      {
         month: "Мар",
         equip: "ТРК",
         value: 15.7
      },
      {
         month: "Апр",
         equip: "ТРК",
         value: 8.5
      },
      {
         month: "Май",
         equip: "ТРК",
         value: 28.4
      },
      {
         month: "Июн",
         equip: "ТРК",
         value: 21.5
      },
      {
         month: "Июл",
         equip: "ТРК",
         value: 25.2
      },
      {
         month: "Авг",
         equip: "ТРК",
         value: 29.5
      },
      {
         month: "Сен",
         ciequipty: "ТРК",
         value: 23.3
      },
      {
         month: "Окт",
         equip: "ТРК",
         value: 18.3
      },
      {
         month: "Ноя",
         equip: "ТРК",
         value: 13.9
      },
      {
         month: "Дек",
         equip: "ТРК",
         value: 9.6
      },
/**** */

      {
         month: "Янв",
         equip: "ФР",
         value: 7.6
      },
      {
         month: "Фев",
         equip: "ФР",
         value: 12.2
      },
      {
         month: "Мар",
         equip: "ФР",
         value: 12.7
      },
      {
         month: "Апр",
         equip: "ФР",
         value: 13.5
      },
      {
         month: "Май",
         equip: "ФР",
         value: 4.4
      },
      {
         month: "Июн",
         equip: "ФР",
         value: 5.5
      },
      {
         month: "Июл",
         equip: "ФР",
         value: 6.2
      },
      {
         month: "Авг",
         equip: "ФР",
         value: 7.5
      },
      {
         month: "Сен",
         equip: "ФР",
         value: 5.3
      },
      {
         month: "Окт",
         equip: "ФР",
         value: 4.3
      },
      {
         month: "Ноя",
         equip: "ФР",
         value: 3.9
      },
      {
         month: "Дек",
         equip: "ФР",
         value: 3.6
      },


      /**** */

      {
         month: "Янв",
         equip: "ТУ",
         value: 14
      },
      {
         month: "Фев",
         equip: "ТУ",
         value: 23.2
      },
      {
         month: "Мар",
         equip: "ТУ",
         value: 22.7
      },
      {
         month: "Апр",
         equip: "ТУ",
         value: 23.5
      },
      {
         month: "Май",
         equip: "ТУ",
         value: 12.4
      },
      {
         month: "Июн",
         equip: "ТУ",
         value: 15.5
      },
      {
         month: "Июл",
         equip: "ТУ",
         value: 16.2
      },
      {
         month: "Авг",
         equip: "ТУ",
         value: 37.5
      },
      {
         month: "Сен",
         equip: "ТУ",
         value: 25.3
      },
      {
         month: "Окт",
         equip: "ТУ",
         value: 24.3
      },
      {
         month: "Ноя",
         equip: "ТУ",
         value: 13.9
      },
      {
         month: "Дек",
         equip: "ТУ",
         value: 23.6
      },

   ];
   return data;
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
   <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
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


/****PresetDateRangePicker********************************/

const today = moment();
const yesterday = moment().add(-1, 'day');

const startPast_Week = moment().startOf('week').isoWeekday(1).add(-7, 'day');
const endPast_Week = moment().startOf('week').isoWeekday(0);

const startPast_Month = moment().subtract(1, 'months').startOf('month');
const endPast_Month = moment().subtract(1, 'months').endOf('month');

//let cDate = '2020/01/20';

const quarter = moment().quarter();
const quarterLast = (quarter == 1) ? 4 : quarter - 1;
let startPast_Quarter = moment().quarter(quarterLast).startOf('quarter');
let endPast_Quarter = moment().quarter(quarterLast).endOf('quarter');

if (quarterLast == 4) {
   startPast_Quarter = moment().add(-1, "year").quarter(quarterLast).startOf('quarter');
   endPast_Quarter = moment().add(-1, "year").quarter(quarterLast).endOf('quarter');
}

export const _startPast_Quarter = startPast_Quarter;
export const _endPast_Quarter = endPast_Quarter;

export const presets_Old = [
   {
      text: 'Прошлый квартал',
      start: startPast_Quarter,
      end: endPast_Quarter,
   },
   {
      text: 'Прошлый месяц',
      start: startPast_Month,
      end: endPast_Month,
   },
   {
      text: 'Прошлые 30 дней',
      start: moment().add(-30, 'day'),
      end: today,
   },
   {
      text: 'Прошлая неделя',
      start: startPast_Week,
      end: endPast_Week,
   },
   {
      text: 'Вчера',
      start: yesterday,
      end: yesterday,
   },
   {
      text: 'Сегодня',
      start: today,
      end: today,
   }];

export const presets = [
   {
      title: 'Сегодня',
      text: 'С',
      start: moment(),
      end: moment(),
   },
   {
      title: 'Вчера',
      text: 'В',
      start: moment().subtract(1, 'day'),
      end: moment().subtract(1, 'day'),
   },
   {
      title: 'Текущая неделя',
      text: 'Н',
      start: moment().startOf('week'),
      end: moment(),
   },
   {
      title: 'Текущий Месяц',
      text: 'М',
      start: moment().startOf('months'),
      end: moment(),
   },
   {
      title: 'Текущий квартал',
      text: 'К',
      start: moment().startOf('quarters'),
      end: moment(),
   },
   {
      title: 'Текущий год',
      text: 'Г',
      start: moment().startOf('year'),
      end: moment(),
   },
   {
      title: 'Прошлая неделя',
      text: 'Н-1',
      start: moment().startOf('week').subtract(7, 'day'),
      end: moment().startOf('week').isoWeekday(0),
   },
   {
      title: 'Прошлый месяц',
      text: 'М-1',
      start: moment().subtract(1, 'months').startOf('month'),
      end: moment().subtract(1, 'months').endOf('month'),
   },
   {
      title: 'Прошлый квартал',
      text: 'К-1',
      start: _startPast_Quarter,
      end: _endPast_Quarter,
   },
   {
      title: 'Прошлый год',
      text: 'Г-1',
      start: moment().subtract(1, 'year').startOf('year'),
      end: moment().subtract(1, 'year').endOf('year'),
   },
   /*
   {
      title: 'Последние 24 часа',
      text: '24',
      start: moment().subtract(24, 'hour'),
      end: moment(),
   },*/
   {
      title: 'Последние 7 дней',
      text: '7',
      start: moment().subtract(6, 'day'),
      end: moment(),
   },
   {
      title: 'Последние 30 дней',
      text: '30',
      start: moment().subtract(29, 'day'),
      end: moment(),
   },
   {
      title: 'Последние 90 дней',
      text: '90',
      start: moment().subtract(89, 'day'),
      end: moment(),
   },
   {
      title: 'Последние 365 дней',
      text: '365',
      start: moment().subtract(364, 'day'),
      end: moment(),
   },
];
export const Title_Date =
   "С\t– Сегодня\n" +
   "В\t– Вчера\n" +
   "Н\t– Текущая неделя\n" +
   "М\t– Текущий Месяц\n" +
   "К\t– Текущий квартал\n" +
   "Г\t– Текущий год\n" +
   "Н-1\t– Прошлая неделя\n" +
   "М-1\t– Прошлый месяц\n" +
   "К-1\t– Прошлый квартал\n" +
   "Г-1\t– Прошлый год\n" +
   "24\t– Последние 24 часа\n" +
   "7\t– Последние 7 дней\n" +
   "30\t– Последние 30 дней\n" +
   "90\t– Последние 90 дней\n" +
   "365\t– Последние 365 дней";

export function isSameDay(a, b) {
   moment.locale('ru');
   /*
      alert(quarter + "\n" +
         quarterLast + "\n" +
         startPast_Quarter.format('DD/MM/YYYY') + "\n" +
         endPast_Quarter.format('DD/MM/YYYY')
      );
   */
   if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
   // Compare least significant, most likely to change units first
   // Moment's isSame clones moment inputs and is a tad slow


   return a.date() === b.date()
      && a.month() === b.month()
      && a.year() === b.year();
}
/****PresetDateRangePicker********************************/