var ApiUtil = {
  fetchListings: function () {
    $.get('api/listings', function(listings){
      console.log(listings);
    });
  }
};

module.exports = ApiUtil;
