import mongoose from 'mongoose';

const BusinessSchema = new mongoose.Schema(
  {
  ownerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users', 
    required: true 
  },
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  
  image: {
      type: String,
      trim: true,
    },
  description: { 
    type: String, 
    trim: true 
  },
  address: {
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true }
  },
  phone: { 
    type: String, 
    required: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    trim: true, 
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  cuisineType: [{ 
    type: String, 
    trim: true 
  }],
  openingHours: [{
    day: { 
      type: String, 
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      required: true 
    },
    open: { 
      type: String, 
      required: true,
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time in HH:MM format']
    },
    close: { 
      type: String, 
      required: true,
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time in HH:MM format']
    }
  }]
}, {
  timestamps: true,
  collection: 'business'
}
);

export default mongoose.models.Business || mongoose.model('Business', BusinessSchema);