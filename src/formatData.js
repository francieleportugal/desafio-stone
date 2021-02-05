const formatData = (emailList, resultByPerson) => {
    return new Map(emailList.map((email, index) => (
        [email, resultByPerson[index]]
    )));
};

module.exports = formatData;
