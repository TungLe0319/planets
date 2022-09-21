import mongoose, {Schema} from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

export const GalaxySchema = new Schema(
  {
    
    Name: {
      type: String,
      required: true,
      minlength:3,
      maxlength: 200
    },
  
    description: {
      type: String,
      default: '',
      minLength: 3,
    },

    //USER INFO
    //RELATIONSHIPS-------------------------------------V magic string here
    Id: { type: ObjectId, required: true, ref: 'Account' },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

GalaxySchema.virtual('galaxy', {
  localField: 'bananaId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account',
});

