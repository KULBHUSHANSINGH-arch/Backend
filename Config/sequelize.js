import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import personModel from '../models/user.model.js';
import vehicleInModel from '../models/vehicleIN.model.js';
import designationModel from '../models/designation.model.js';
import vehicleTypeModel from '../models/vehicleType.model.js';
import departmentModel from '../models/department.model.js';
import workLocationModel from '../models/workLocation.model.js';
import partyModel from '../models/party.model.js';
import transporterModel from '../models/transporter.model.js';
import deleiveryModel from '../models/deleivery.model.js';

import versionModel from '../models/version.model.js';
import salesModel from '../models/sales.model.js';
import salesOrderItemModel from '../models/salesOrderItem.model.js';

import watageModel from '../models/watage.model.js';
import vehcleTrackingModel from '../models/vehcleTracking.model.js';
import EmailNotificationModel from '../models/EmailNotifications.model.js';
import vehicleReportModel from '../models/vehicle.Report.model.js';
import meetingTrackingModel from '../models/meeting.model.js';
import panelModel from '../models/panel.model.js';

import partyAmountModel from '../models/partyAmount.model.js';
import VehicleUnloadingModel from '../models/VehicleUnloading.model.js';
//import LocationTracking from '../models/locationTracking.model.js';

dotenv.config();

// Create a new Sequelize instance with database connection details
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+05:30', 
    logging: false,
    pool: {
      max: 20,       // Maximum number of connections in pool
      min: 0,        // Minimum number of connections in pool
      acquire: 60000, // Maximum time (in milliseconds) that pool will try to get connection before throwing error
      idle: 20000     // Maximum time (in milliseconds) that a connection can be idle before being released
    }
  }
);

// console.log('time zone',sequelize.options.timezone);


const db = {
  Sequelize,
  sequelize,
  Person: personModel(sequelize, Sequelize),
  VehicleIn: vehicleInModel(sequelize, Sequelize),
  Designation: designationModel(sequelize, Sequelize),
  VehicleType: vehicleTypeModel(sequelize, Sequelize),
  Department: departmentModel(sequelize, Sequelize),
  WorkLocation: workLocationModel(sequelize, Sequelize),
  Party:partyModel(sequelize,Sequelize),
  TransPorter:transporterModel(sequelize,Sequelize),
  Deleivery:deleiveryModel(sequelize,Sequelize),
  version:versionModel(sequelize,Sequelize),
  salesOrder:salesModel(sequelize,Sequelize),
  salesOrderItem:salesOrderItemModel(sequelize,Sequelize),
  watage:watageModel(sequelize,Sequelize),
  VehicleTracking:vehcleTrackingModel(sequelize,Sequelize),
  EmailNotification:EmailNotificationModel(sequelize,Sequelize),
  VehicleReport:vehicleReportModel(sequelize,Sequelize),
  meetingTracking:meetingTrackingModel(sequelize,Sequelize),
  panelModel:panelModel(sequelize,Sequelize),
  
  partyAmountModel:partyAmountModel(sequelize,Sequelize),
  VehicleUnloadingModel:VehicleUnloadingModel(sequelize,Sequelize),
  //LocationTracking:LocationTracking(sequelize,Sequelize),
};



// Sync all models with the database
sequelize.sync();

export default db;
