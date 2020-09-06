import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    min: 0,
  },
}, { timestamps: { updatedAt: 'lastModified', createdAt: false }});

const gradeModel = mongoose.model('grade', gradeSchema);

export { gradeModel };
