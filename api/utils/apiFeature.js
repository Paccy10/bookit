class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? { address: { $regex: this.queryStr.location, $options: "i" } }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //Remove fields from query
    const fieldsToRemove = ["location", "page"];
    fieldsToRemove.forEach((field) => delete queryCopy[field]);

    this.query = this.query.find(queryCopy);
    return this;
  }

  paginate(limit) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = limit * (currentPage - 1);

    this.query = this.query.limit(limit).skip(skip);
    return this;
  }
}

export default APIFeatures;
