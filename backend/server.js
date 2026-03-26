import app from './app.js';
import { startAppointmentReminderCron } from './utils/appointmentReminder.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  
  // Start appointment reminder cron job
  startAppointmentReminderCron();
});
