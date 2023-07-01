const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

create().then((client) => start(client));

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);
    if (msg.body === "!cek") {
      client.sendText(msg.from, "👋 Hello! BOT AKTIF");
      client;
    }
	if (msg.body === "!cmd") {
      client.sendText(msg.from, `
	  !cek = Untuk cek bot aktif atau engga
	  !jadwal = Menunjukan Matkul 
	  !stiker = Buat stiker pake gambar
	  !rules = cek peraturan bot ini`);
      client;
    }
	if (msg.body === "!rules") {
      client.sendText(msg.from, ` 
	Rules ... !!!


• *Jangan spam bot ..*
• *Jangan rusuh kalo bot gaaktif*
• *Jangan telfon / vc bot nya ..*
     ( _auto block_ )
• *Sesuai kan perintah dengan formatnya..*
_salah format dan bot error = block_

Konsekuensi :

 Melanggar rules bot akan keluar 

Rules ini untuk kenyamanan semua yang memakai
bot ini


	`);
      client;
    }
	if (msg.body === "P") {
      client.sendText(msg.from, "Iya?");
      client;
    }
	if (msg.body === "!test") {
      client.sendText(msg.from, `
		*SELAMAT DATANG DI BOT Ahza ^_^* 

_Hai kawan, sebelum memakai bot ini patuhi rules dulu ya ._
Ketikan *!rules* untuk melihat rules memakai bot ini`);
      client;
    }
	if (msg.body === "Ahza" || msg.body === "ahza") {
      client.sendText(msg.from, "👋 Iyaa");
      client;
    }
	
	
	if (msg.body === "!jadwal") {
      client.sendText(msg.from, `
				✨--JADWAL MATKUL--✨
 ----------------------------------------------	
👉Senin 13.30-15.10 - Teknologi Antar Jaringan
👨Dosen = Mulkan Azhari, M.kom

👉Senin 15.10-16.50 - Managemen Proyek TI  
👨Dosen = Budi Kurniawan, M.Kom

👉Senin 16.50-18.30 - Keamanan Informasi 
👨Dosen = Farid Akbar M.Kom 
 ----------------------------------------------
 ----------------------------------------------
👉Selasa 13.30-.16.00 - Kecerdasan Buatan 
👨Dosen = Al-Khowarizmi, M.Kom

👉Selasa 16.00-17.30 - Prak. Statistik dan Probabilitas 
👩Dosen = Hevlie Winda Nazry S, S.pd, M.Si
 -----------------------------------------------
 -----------------------------------------------
👉Rabu 13.30-15.10 - Islam dan Iptek 
👩Dosen = Nadlrah Naimi, M.A

👉Rabu 15.10-16.50 - Sistem Mikroprosesor dan Assembly 
👨Dosen = Muhammad Basri M.Kom
 -----------------------------------------------
 -----------------------------------------------
👉Kamis 13.30-15.10 - Statistik dan Probabilitas 
👩Dosen = Hevlie Winda Nazry S, S.pd, M.Si
 
👉Kamis 15.10-16.50 - Pengelolaan Citra Digital
👩Dosen = Indah Purnama Sari, M.Kom
 ------------------------------------------------
 ------------------------------------------------
👉Jum'at 14.50-16.20 - Prak. Pengelolaan Citra Digital
👩Dosen = Indah Purnama Sari, M.Kom

👉Juma'at 16.30-18.00 - Prak. Teknologi Antar Jaringan
👨Dosen = Mulkan Azhari, M.kom
 ------------------------------------------------
 ------------------------------------------------
👉Sabtu 16.00-17.30 - Prak. Sistem Mikroprosesor dan Assembly 
👨Dosen = Muhammad Basri M.Kom

`);
      client;
    }
    






	else if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}