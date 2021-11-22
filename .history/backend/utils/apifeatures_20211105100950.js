class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword 
        ? {
            name:{
                $regex:this.queryStr.keyword,
                $options: "i",
            }
        }
        : {};

        thi
    }
};

module.exports = ApiFeatures;