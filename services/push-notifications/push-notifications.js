const sendPushNotification = async (event,  fcmToken, type) => {
    var body, title = "";

    // TODO CREATE SWITCH CASES FOR EACH TYPE
    /*
    *   Types :
    *       Sukses Interview
    *       Gagal Interview
    *       Suskses Tes Darah
    *       Gagal Tes Darah
    *       Sukses Donor
    *       Gagal Donor
    *       Cancel Donor
    * */
    // switch (type) {
    //     case "interviewSuccess":
    //         body = "Yayyy kamu sukses interpiu",
    //         title = "SUkses bRO"
    //     break;
    // }
    if (type == "interviewSuccess") {
        body = "Yayyy kamu sukses interpiu",
        title = "SUkses bRO"
    }

    event.preventDefault()
    const res = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // TODO PUT BEARER TOKEN IN ENV
            "Authorization": "Bearer AAAALb4Cpms:APA91bF6fXvR1rEeMWUr2RWJJ-spN73rNlBeL_dy709oR1wrhwo8zSPoOiE2IvOJ5GdOQYYYZFTiKBpU_RO4jbYA30wab8M_nBYA5cazqGM-xcQXPzphgw2nAwqUCIPHu_7bJB2dUZHn"
        },
        body: JSON.stringify({
            "to": fcmToken,
            "notification": {
                "body": body,
                "title": title
            }
        })
    })
    const result = await res;
    const errorCode = res.ok? false : res.status
    console.log('====res', result)
}

export  {
    sendPushNotification
}