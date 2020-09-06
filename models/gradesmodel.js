export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      requie: true,
    },
    subject: {
      type: String,
      requie: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  schema.method('toJson', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });
  const gradesModel = mongoose.model('myCollection', schema, 'myCollection');

  return gradesModel;
};
