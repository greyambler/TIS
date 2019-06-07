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
         dataCol_Char1[t] = {date: date, sales: 1, norm: 2 };
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

export const presets = [
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