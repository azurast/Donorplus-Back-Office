const sendPushNotification = async (fcmToken, type) => {
    var body, title = "";

    var title, body = "";

    console.log('===type', type);

    switch (type) {
        case "interviewSuccess" :
            title = "Selamat!"
            body = "Anda sukses melalui tahap wawancara"
            break;
        case "interviewFailed" :
            title = "Maaf"
            body = "Anda tidak lolos tahap wawancara"
            break;
        case "bloodtestSuccess" :
            title = "Selamat!"
            body = "Anda sukses melalui tes darah"
            break;
        case "bloodtestFailed" :
            title = "Maaf!"
            body = "Anda tidak lolos tahap tes darah"
            break;
        case "donorSuccess" :
            title = "Terima kasih!"
            body = "Anda telah berhasil mendonasikan plasma anda!"
            break;
        case "donorFailed" :
            title = "Maaf"
            body = "Anda belum berhasil mendonasikan plasma anda"
            break;
        default :
            title = "default title";
            body = "default body";
    }

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