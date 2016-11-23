formatDate = function(date){
    var splitDate = date.substring(0, 10).split('-');
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    dateString = "";
    dateString += months[splitDate[1]];
    dateString += " ";
    if(splitDate[2] == 1){
        dateString += "1st";
    }else if(splitDate[2] == 2){
        dateString += "2nd";
    }else if(splitDate[2] == 3){
        dateString += "3rd";
    }else{
        dateString += splitDate[2] + "th ";
    }
    dateString += splitDate[0]
    return dateString;
}
