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
            "Authorization": `Bearer ${process.env.firebaseServerKey}`
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