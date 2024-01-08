const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Cookie: "PHPSESSID=inisangatrahasiacuyy",
};

const sendJurnal = async (jurnal) => {
  await fetch("http://45.146.106.80:9595/login.php", {
    method: "POST",
    headers,
    body: "username=ind_indikator&password=siswatkjsmkn1doko&login=",
  });
  const response = await fetch("http://45.146.106.80:9595/jurnal.php", {
    method: "POST",
    headers,
    body: `namasiswa=ROMY+SAPUTRA+SIHANANDA&kelas=XII+TKJ1&dudi=PT+INDONESIA+INDIKATOR&jurnal=${jurnal.replace(
      " ",
      "+"
    )}&tambah=`,
  });
};

module.exports = { sendJurnal };
