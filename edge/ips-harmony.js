// @ts-nocheck  Last Update: Sunday, april 16, 2024
// Built a subscription link with the ability to automatically add CF clean IPs to VLESS configurations.
// Replace these lines with your uuid and hostname, uuid line (54) - hostname lines (809-812) and (845-848) and (866-869)

// By NiREvil

// @ts-ignore

function shufflEArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const defaultConfig1 = {
  "v": "2",
  "ps": "",
  "add": "",
  "port": "",
  "id": "B686E42E-3EB4-4AB5-8354-32D7AFA5F541",
  "aid": "auto",
  "net": "ws",
  "type": "",
  "host": "",
  "path": "",
  "tls": "tls",
  "sni": "",
  "remark": "auto",
  "s": "auto",
  "sn": "",
  "tls13": "true",
  "vmess": "1",
  "alpn": "h2,http/1.1",
  "fp": ""
};
// چطور  یویو آی‌دی خودمونو بگیریم:
// با مراجعه به این سایت
//https://www.uuidgenerator.net/  و یا
// [در ویندوز] Press "Win + R", input "CMD" and run and paste this:  Powershell -NoExit -Command "[guid]::NewGuid()"
const defaultConfigvless = {
  v: "2",
  ps: "",
  port: "443",
  id: "664f5f11-1231-486d-b416-b7b3ecdae76a",// your UUID set
  aid: "0",
  net: "ws",
  type: "none",
  host: "",
  path: "/?ed=2048",
  tls: "tls",
  sni: "",
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  const IP1 = [
    '[::ffff:be5d:f6f1]',
    '[::ffff:5fb3:83ef]',
    '[::ffff:8d0:1652]',
    '[::ffff:8d0:1925]',
    '[::ffff:8d0:aa9]',
    '[::ffff:c629:df08]',
    '[::ffff:c629:c411]',
    '[::ffff:6812:c8dc]',
    '[::ffff:4044:c001]',
    '[::ffff:42eb:c8fd]',
    '[::ffff:a29f:2023]',
    '[::ffff:6813:13b]',
    '[::ffff:c629:c7a6]',
    '[::ffff:8d65:7159]',
    '[::ffff:6814:e7d2]',
    '[::ffff:adf5:3a22]',
    '[::ffff:681f:1041]',
    '[::ffff:681f:106d]',
    '[::ffff:6815:d34a]',
    '[::ffff:54f:5972]', 
    '[::ffff:d34:54aa]',
    '[::ffff:de1:4e1b]',
    '[::ffff:34d8:8222]',
    '[::ffff:40ff:dcc3]',
    '[::ffff:4109:426f]',
    '[::ffff:6810:31f]',
    '[::ffff:6810:631]',
    '[::ffff:6810:1512]',
    '[::ffff:6810:2b61]',
    '[::ffff:6810:2eb6]',
    '[::ffff:6810:3530]',
    '[::ffff:6810:3734]',
    '[::ffff:6810:3b36]',
    '[::ffff:6810:4425]',
    '[::ffff:6810:5c53]',
    '[::ffff:6810:640d]',
    '[::ffff:6810:650c]',
    '[::ffff:6810:6957]',
    '[::ffff:6810:7666]',
    '[::ffff:6810:7961]',
    '[::ffff:6810:7a5b]',
    '[::ffff:6810:85e5]',
    '[::ffff:6810:8d34]',
    '[::ffff:6810:9a47]',
    '[::ffff:6810:9b24]',
    '[::ffff:6810:ae38]',
    '[::ffff:6810:b02c]',
    '[::ffff:6810:b2be]',
    '[::ffff:6810:b44f]',
    '[::ffff:6810:b50f]', 
    '[::ffff:6810:b52d]', 
    '[::ffff:6810:bcad]', 
    '[::ffff:6810:c019]', 
    '[::ffff:6810:c1e2]', 
    '[::ffff:6810:d047]', 
    '[::ffff:6810:df6b]', 
    '[::ffff:6810:e20a]', 
    '[::ffff:6810:e233]', 
    '[::ffff:6810:e248]', 
    '[::ffff:6810:e25b]', 
    '[::ffff:6810:ed29]', 
    '[::ffff:6810:ef41]', 
    '[::ffff:6810:f51c]', 
    '[::ffff:6811:2069]', 
    '[::ffff:6811:324a]', 
    '[::ffff:6811:4a5b]', 
    '[::ffff:6811:5137]', 
    '[::ffff:6811:5559]', 
    '[::ffff:6811:5833]', 
    '[::ffff:6811:5a33]', 
    '[::ffff:6811:5a6d]', 
    '[::ffff:6811:5d2f]', 
    '[::ffff:6811:600d]', 
    '[::ffff:6811:6205]', 
    '[::ffff:6811:6e0c]', 
    '[::ffff:6811:71bc]', 
    '[::ffff:6811:7233]', 
    '[::ffff:6811:7d12]', 
    '[::ffff:6811:8560]', 
    '[::ffff:6811:8cba]', 
    '[::ffff:6811:a32f]', 
    '[::ffff:6811:b742]', 
    '[::ffff:6811:bc66]', 
    '[::ffff:6811:c439]', 
    '[::ffff:6811:d451]', 
    '[::ffff:6811:d90f]', 
    '[::ffff:6811:e94f]', 
    '[::ffff:6812:2]', 
    '[::ffff:6812:24]', 
    '[::ffff:6812:b5]', 
    '[::ffff:6812:132]', 
    '[::ffff:6812:199]', 
    '[::ffff:6812:19a]', 
    '[::ffff:6812:1a9]', 
    '[::ffff:6812:245]', 
    '[::ffff:6812:275]', 
    '[::ffff:6812:277]', 
    '[::ffff:6812:39d]', 
    '[::ffff:6812:429]', 
    '[::ffff:6812:42b]', 
    '[::ffff:6812:49e]', 
    '[::ffff:6812:5b6]', 
    '[::ffff:6812:637]', 
    '[::ffff:6812:668]', 
    '[::ffff:6812:6e4]', 
    '[::ffff:6812:724]', 
    '[::ffff:6812:735]', 
    '[::ffff:6812:772]', 
    '[::ffff:6812:7b7]', 
    '[::ffff:6812:7eb]', 
    '[::ffff:6812:80d]', 
    '[::ffff:6812:880]', 
    '[::ffff:6812:8d1]', 
    '[::ffff:6812:8f9]', 
    '[::ffff:6812:90a]', 
    '[::ffff:6812:914]', 
    '[::ffff:6812:965]', 
    '[::ffff:6812:986]', 
    '[::ffff:6812:996]', 
    '[::ffff:6812:9f1]', 
    '[::ffff:6812:a07]', 
    '[::ffff:6812:b27]', 
    '[::ffff:6812:b3f]', 
    '[::ffff:6812:b80]', 
    '[::ffff:6812:b88]', 
    '[::ffff:6812:b95]', 
    '[::ffff:6812:c5c]', 
    '[::ffff:6812:c96]', 
    '[::ffff:6812:cd4]', 
    '[::ffff:6812:cd9]', 
    '[::ffff:6812:d3c]', 
    '[::ffff:6812:f10]', 
    '[::ffff:6812:f3c]', 
    '[::ffff:6812:f72]', 
    '[::ffff:6812:fe5]', 
    '[::ffff:6812:101c]', 
    '[::ffff:6812:10b0]', 
    '[::ffff:6812:10d2]', 
    '[::ffff:6812:118c]', 
    '[::ffff:6812:11b5]', 
    '[::ffff:6812:11bd]', 
    '[::ffff:6812:11f3]', 
    '[::ffff:6812:124f]', 
    '[::ffff:6812:1285]', 
    '[::ffff:6812:12b3]', 
    '[::ffff:6812:12da]', 
    '[::ffff:6812:12de]', 
    '[::ffff:6812:143e]', 
    '[::ffff:6812:154e]', 
    '[::ffff:6812:1562]', 
    '[::ffff:6812:1598]', 
    '[::ffff:6812:15e4]', 
    '[::ffff:6812:16d0]', 
    '[::ffff:6812:1734]', 
    '[::ffff:6812:1836]', 
    '[::ffff:6812:1880]', 
    '[::ffff:6812:1987]', 
    '[::ffff:6812:1997]', 
    '[::ffff:6812:1af8]', 
    '[::ffff:6812:1bbd]', 
    '[::ffff:6812:1bc0]', 
    '[::ffff:6812:1bc8]', 
    '[::ffff:6812:1c6d]', 
    '[::ffff:6812:1c70]', 
    '[::ffff:6812:1cd1]', 
    '[::ffff:6812:1cdb]', 
    '[::ffff:6812:1dad]', 
    '[::ffff:6812:1dd5]', 
    '[::ffff:6812:1e4c]', 
    '[::ffff:6812:1e9d]', 
    '[::ffff:6812:1ee1]', 
    '[::ffff:6812:1fdd]', 
    '[::ffff:6812:2199]', 
    '[::ffff:6812:21f5]', 
    '[::ffff:6812:2231]', 
    '[::ffff:6812:287a]', 
    '[::ffff:6812:46d6]', 
    '[::ffff:6812:5aed]', 
    '[::ffff:6812:5f48]', 
    '[::ffff:6812:685b]', 
    '[::ffff:6812:6894]', 
    '[::ffff:6812:7164]', 
    '[::ffff:6812:9b3e]', 
    '[::ffff:6812:9d42]', 
    '[::ffff:6812:af15]', 
    '[::ffff:6812:b663]', 
    '[::ffff:6812:b950]', 
    '[::ffff:6812:ba0b]', 
    '[::ffff:6812:ba53]', 
    '[::ffff:6812:bde4]', 
    '[::ffff:6812:c63e]', 
    '[::ffff:6812:fc52]', 
    '[::ffff:6813:8c39]', 
    '[::ffff:6813:af3d]', 
    '[::ffff:6813:ba10]', 
    '[::ffff:6813:d625]', 
    '[::ffff:6813:dd26]', 
    '[::ffff:6813:ea29]', 
    '[::ffff:6813:ef75]', 
    '[::ffff:6814:15e]', 
    '[::ffff:6814:241]', 
    '[::ffff:6814:ada]', 
    '[::ffff:6814:1119]', 
    '[::ffff:6814:1128]', 
    '[::ffff:6814:172e]', 
    '[::ffff:6814:1b43]', 
    '[::ffff:6814:26f2]', 
    '[::ffff:6814:2ea1]', 
    '[::ffff:6814:3cf1]', 
    '[::ffff:6814:448f]', 
    '[::ffff:6814:7574]', 
    '[::ffff:6814:be2a]', 
    '[::ffff:6814:c046]', 
    '[::ffff:6814:e546]', 
    '[::ffff:6815:186]', 
    '[::ffff:6815:1a1]', 
    '[::ffff:6815:47b]', 
    '[::ffff:6815:4aa]', 
    '[::ffff:6815:818]', 
    '[::ffff:6815:83b]', 
    '[::ffff:6815:873]', 
    '[::ffff:6815:1598]', 
    '[::ffff:6815:1777]', 
    '[::ffff:6815:1cfa]', 
    '[::ffff:6815:1d14]', 
    '[::ffff:6815:1d4a]', 
    '[::ffff:6815:1d56]', 
    '[::ffff:6815:1de0]', 
    '[::ffff:6815:226e]', 
    '[::ffff:6815:23a0]', 
    '[::ffff:6815:23bb]', 
    '[::ffff:6815:24a5]', 
    '[::ffff:6815:2706]', 
    '[::ffff:6815:2a65]', 
    '[::ffff:6815:2b0d]', 
    '[::ffff:6815:2b12]', 
    '[::ffff:6815:2d66]', 
    '[::ffff:6815:2de2]', 
    '[::ffff:6815:2fad]', 
    '[::ffff:6815:30ec]', 
    '[::ffff:6815:3197]', 
    '[::ffff:6815:32ef]', 
    '[::ffff:6815:36ee]', 
    '[::ffff:6815:3874]', 
    '[::ffff:6815:3914]', 
    '[::ffff:6815:39c9]', 
    '[::ffff:6815:3adc]', 
    '[::ffff:6815:3c7d]', 
    '[::ffff:6815:3cad]', 
    '[::ffff:6815:3d4c]', 
    '[::ffff:6815:3d61]', 
    '[::ffff:6815:3e4b]', 
    '[::ffff:6815:41b1]', 
    '[::ffff:6815:4507]', 
    '[::ffff:6815:45a4]', 
    '[::ffff:6815:472f]', 
    '[::ffff:6815:473d]', 
    '[::ffff:6815:4bbf]', 
    '[::ffff:6815:530c]', 
    '[::ffff:6815:5760]', 
    '[::ffff:6815:5afc]', 
    '[::ffff:6815:5b86]', 
    '[::ffff:6815:5bfa]', 
    '[::ffff:6815:5cf1]', 
    '[::ffff:6815:5db3]', 
    '[::ffff:6815:5e1e]', 
    '[::ffff:6815:5f1d]', 
    '[::ffff:6815:5f69]', 
    '[::ffff:6815:5f9c]', 
    '[::ffff:6815:6041]', 
    '[::ffff:6815:e97f]', 
    '[::ffff:6815:e986]', 
    '[::ffff:6815:e9b3]', 
    '[::ffff:6815:ea0a]', 
    '[::ffff:6815:ea3b]', 
    '[::ffff:6815:ea50]', 
    '[::ffff:6815:ea79]', 
    '[::ffff:6815:ea9d]', 
    '[::ffff:6815:eb31]', 
    '[::ffff:6815:eb4c]', 
    '[::ffff:6815:eb53]', 
    '[::ffff:6815:eb73]', 
    '[::ffff:6815:eb9a]', 
    '[::ffff:6815:ebab]', 
    '[::ffff:6816:131]', 
    '[::ffff:6816:172]', 
    '[::ffff:6816:32b]', 
    '[::ffff:6816:6a9]', 
    '[::ffff:6816:839]', 
    '[::ffff:6816:8a1]', 
    '[::ffff:6816:aa2]', 
    '[::ffff:6816:c59]', 
    '[::ffff:6816:de6]', 
    '[::ffff:6816:f39]', 
    '[::ffff:6816:10e0]', 
    '[::ffff:6816:13ae]', 
    '[::ffff:6816:1870]', 
    '[::ffff:6816:1d50]', 
    '[::ffff:6816:234f]', 
    '[::ffff:6816:29d8]', 
    '[::ffff:6816:2b66]', 
    '[::ffff:6816:2b8b]', 
    '[::ffff:6816:33d1]', 
    '[::ffff:6816:3563]', 
    '[::ffff:6816:38d8]', 
    '[::ffff:6816:3a60]', 
    '[::ffff:6816:3aad]', 
    '[::ffff:6816:3d4d]', 
    '[::ffff:6816:3d88]', 
    '[::ffff:6816:3f4e]', 
    '[::ffff:6816:42a7]', 
    '[::ffff:6816:43de]', 
    '[::ffff:6816:4442]', 
    '[::ffff:6816:4475]', 
    '[::ffff:6816:4645]', 
    '[::ffff:6816:486f]', 
    '[::ffff:6816:4d72]', 
    '[::ffff:6816:4d8e]', 
    '[::ffff:6816:4dad]', 
    '[::ffff:6816:4dd7]', 
    '[::ffff:6817:8b11]', 
    '[::ffff:681a:1b]', 
    '[::ffff:681a:78]', 
    '[::ffff:681a:97]', 
    '[::ffff:681a:be]', 
    '[::ffff:681a:c6]', 
    '[::ffff:681a:108]', 
    '[::ffff:681a:125]', 
    '[::ffff:681a:140]', 
    '[::ffff:681a:164]', 
    '[::ffff:681a:182]', 
    '[::ffff:681a:18f]', 
    '[::ffff:681a:192]', 
    '[::ffff:681a:19b]',
    '[::ffff:681a:1cc]',
    '[::ffff:681a:1e5]', 
    '[::ffff:681a:1f2]', 
    '[::ffff:681a:205]', 
    '[::ffff:681a:221]', 
    '[::ffff:681a:2ee]', 
    '[::ffff:681a:2ef]', 
    '[::ffff:681a:343]', 
    '[::ffff:681a:344]', 
    '[::ffff:681a:389]', 
    '[::ffff:681a:3ba]', 
    '[::ffff:681a:413]', 
    '[::ffff:681a:45c]', 
    '[::ffff:681a:485]', 
    '[::ffff:681a:49a]', 
    '[::ffff:681a:4b3]', 
    '[::ffff:681a:4b7]', 
    '[::ffff:681a:4ee]', 
    '[::ffff:681a:603]', 
    '[::ffff:681a:60a]', 
    '[::ffff:681a:623]', 
    '[::ffff:681a:625]', 
    '[::ffff:681a:6eb]', 
    '[::ffff:681a:6ed]', 
    '[::ffff:681a:73b]', 
    '[::ffff:681a:75f]', 
    '[::ffff:681a:796]', 
    '[::ffff:681a:79c]', 
    '[::ffff:681a:7ca]', 
    '[::ffff:681a:815]', 
    '[::ffff:681a:83e]', 
    '[::ffff:681a:896]', 
    '[::ffff:681a:89e]', 
    '[::ffff:681a:8a0]', 
    '[::ffff:681a:8e1]', 
    '[::ffff:681a:8f6]', 
    '[::ffff:681a:909]', 
    '[::ffff:681a:915]', 
    '[::ffff:681a:917]', 
    '[::ffff:681a:95b]', 
    '[::ffff:681a:965]', 
    '[::ffff:681a:971]', 
    '[::ffff:681a:a04]', 
    '[::ffff:681a:a31]', 
    '[::ffff:681a:a5b]', 
    '[::ffff:681a:b27]', 
    '[::ffff:681a:b30]', 
    '[::ffff:681a:b93]', 
    '[::ffff:681a:bb0]', 
    '[::ffff:681a:c2b]', 
    '[::ffff:681a:c32]', 
    '[::ffff:681a:c8e]', 
    '[::ffff:681a:cad]', 
    '[::ffff:681a:d11]', 
    '[::ffff:681a:d31]', 
    '[::ffff:681a:d36]', 
    '[::ffff:681a:d9e]', 
    '[::ffff:681a:dd1]', 
    '[::ffff:681a:e02]', 
    '[::ffff:681a:e1c]', 
    '[::ffff:681a:e31]', 
    '[::ffff:681a:e3b]', 
    '[::ffff:681a:f46]', 
    '[::ffff:681a:f50]', 
    '[::ffff:681a:f55]', 
    '[::ffff:681a:fb0]', 
    '[::ffff:681a:fb6]', 
    '[::ffff:681b:cb59]', 
    '[::ffff:681b:cc59]', 
    '[::ffff:681b:ce57]', 
    '[::ffff:681b:cf5c]', 
    '[::ffff:681f:1003]', 
    '[::ffff:681f:1007]', 
    '[::ffff:681f:1009]', 
    '[::ffff:681f:100a]', 
    '[::ffff:681f:100b]', 
    '[::ffff:681f:1076]', 
    '[::ffff:681f:1078]', 
    '[::ffff:681f:107c]', 
    '[::ffff:8d65:79ee]', 
    '[::ffff:a29f:8035]', 
    '[::ffff:a29f:803d]', 
    '[::ffff:a29f:8040]', 
    '[::ffff:a29f:80e9]', 
    '[::ffff:a29f:8129]', 
    '[::ffff:a29f:8135]', 
    '[::ffff:a29f:8143]', 
    '[::ffff:a29f:815b]', 
    '[::ffff:a29f:8223]', 
    '[::ffff:a29f:86e9]', 
    '[::ffff:a29f:872a]', 
    '[::ffff:a29f:880b]', 
    '[::ffff:a29f:883f]', 
    '[::ffff:a29f:8942]', 
    '[::ffff:a29f:8946]', 
    '[::ffff:a29f:9904]', 
    '[::ffff:ac40:6c25]', 
    '[::ffff:ac40:8225]', 
    '[::ffff:ac40:9178]', 
    '[::ffff:ac40:937b]', 
    '[::ffff:ac40:97ea]', 
    '[::ffff:ac40:99cd]', 
    '[::ffff:ac40:9a18]', 
    '[::ffff:ac40:9ae5]', 
    '[::ffff:ac40:a504]', 
    '[::ffff:ac40:a627]', 
    '[::ffff:ac40:aa0f]', 
    '[::ffff:ac40:c616]', 
    '[::ffff:ac41:4032]', 
    '[::ffff:ac41:f8d5]', 
    '[::ffff:ac42:2839]', 
    '[::ffff:ac42:28a5]', 
    '[::ffff:ac42:28cb]', 
    '[::ffff:ac42:28e6]', 
    '[::ffff:ac42:28ea]', 
    '[::ffff:ac42:28fd]', 
    '[::ffff:ac42:2915]', 
    '[::ffff:ac42:292d]', 
    '[::ffff:ac42:2afa]', 
    '[::ffff:ac42:2bac]', 
    '[::ffff:ac42:2baf]', 
    '[::ffff:ac42:2bee]', 
    '[::ffff:ac42:2cc6]', 
    '[::ffff:ac43:697]', 
    '[::ffff:ac43:751]', 
    '[::ffff:ac43:87f]', 
    '[::ffff:ac43:896]', 
    '[::ffff:ac43:8d1]', 
    '[::ffff:ac43:964]', 
    '[::ffff:ac43:9df]', 
    '[::ffff:ac43:c22]', 
    '[::ffff:ac43:c4b]', 
    '[::ffff:ac43:c8c]', 
    '[::ffff:ac43:dee]', 
    '[::ffff:ac43:eba]', 
    '[::ffff:ac43:faf]', 
    '[::ffff:ac43:128e]', 
    '[::ffff:ac43:1638]', 
    '[::ffff:ac43:1649]', 
    '[::ffff:ac43:19c9]', 
    '[::ffff:ac43:19e5]', 
    '[::ffff:ac43:19f0]', 
    '[::ffff:ac43:1af2]', 
    '[::ffff:ac43:1bd5]', 
    '[::ffff:ac43:1dda]', 
    '[::ffff:ac43:1e94]', 
    '[::ffff:ac43:1eaa]', 
    '[::ffff:ac43:204e]', 
    '[::ffff:ac43:223a]', 
    '[::ffff:ac43:271a]', 
    '[::ffff:ac43:28b6]', 
    '[::ffff:ac43:2908]', 
    '[::ffff:ac43:2b37]', 
    '[::ffff:ac43:2b3a]', 
    '[::ffff:ac43:4417]', 
    '[::ffff:ac43:44a4]', 
    '[::ffff:ac43:44b2]', 
    '[::ffff:ac43:44e2]', 
    '[::ffff:ac43:44f2]', 
    '[::ffff:ac43:44fe]', 
    '[::ffff:ac43:4507]', 
    '[::ffff:ac43:451a]', 
    '[::ffff:ac43:451b]', 
    '[::ffff:ac43:45bc]', 
    '[::ffff:ac43:45f1]', 
    '[::ffff:ac43:4616]', 
    '[::ffff:ac43:4634]', 
    '[::ffff:ac43:4656]', 
    '[::ffff:ac43:465c]', 
    '[::ffff:ac43:4675]', 
    '[::ffff:ac43:471a]', 
    '[::ffff:ac43:47e8]', 
    '[::ffff:ac43:4873]', 
    '[::ffff:ac43:4884]', 
    '[::ffff:ac43:4892]', 
    '[::ffff:ac43:491e]', 
    '[::ffff:ac43:4945]', 
    '[::ffff:ac43:498b]', 
    '[::ffff:ac43:4a10]', 
    '[::ffff:ac43:4a13]', 
    '[::ffff:ac43:4a20]', 
    '[::ffff:ac43:4a6c]', 
    '[::ffff:ac43:4a8b]', 
    '[::ffff:ac43:4adb]', 
    '[::ffff:ac43:4b05]', 
    '[::ffff:ac43:4ba2]', 
    '[::ffff:ac43:8366]', 
    '[::ffff:ac43:87c6]', 
    '[::ffff:ac43:8b22]', 
    '[::ffff:ac43:8c9c]', 
    '[::ffff:ac43:8f82]', 
    '[::ffff:ac43:9245]', 
    '[::ffff:ac43:9612]', 
    '[::ffff:ac43:991d]', 
    '[::ffff:ac43:9a64]', 
    '[::ffff:ac43:a07a]', 
    '[::ffff:ac43:a196]', 
    '[::ffff:ac43:a3d5]', 
    '[::ffff:ac43:a46f]', 
    '[::ffff:ac43:a4b8]', 
    '[::ffff:ac43:a597]', 
    '[::ffff:ac43:a6c0]', 
    '[::ffff:ac43:a770]', 
    '[::ffff:ac43:a7ba]', 
    '[::ffff:ac43:a83a]', 
    '[::ffff:ac43:a95f]', 
    '[::ffff:ac43:a9c0]', 
    '[::ffff:ac43:afeb]', 
    '[::ffff:ac43:b2c4]', 
    '[::ffff:ac43:b40c]', 
    '[::ffff:ac43:b5a1]', 
    '[::ffff:ac43:b8a3]', 
    '[::ffff:ac43:bb26]', 
    '[::ffff:ac43:c2cb]', 
    '[::ffff:ac43:c4cf]', 
    '[::ffff:ac43:c528]', 
    '[::ffff:ac43:c5ba]', 
    '[::ffff:ac43:c74f]', 
    '[::ffff:ac43:c7a7]', 
    '[::ffff:ac43:d46d]', 
    '[::ffff:ac43:d4b8]', 
    '[::ffff:ac43:deb5]', 
    '[::ffff:b906:4c2a]', 
    '[::ffff:bc72:6003]', 
    '[::ffff:bc72:6103]', 
    '[::ffff:bc72:6200]', 
    '[::ffff:c7bf:3249]',
    '[::ffff:2d8e:780d]',
    '[::ffff:2d8e:780e]',
    '[::ffff:6715:f42a]',
    '[::ffff:6715:f43b]',
    '[::ffff:6715:f43f]',
    '[::ffff:6715:f462]',
    '[::ffff:6715:f46f]',
    '[::ffff:67a0:cc05]',
    '[::ffff:67a0:cc0b]',
    '[::ffff:67a0:cc11]',
    '[::ffff:6818:e]',
    '[::ffff:6818:11]', 
    '[::ffff:6818:19]', 
    '[::ffff:6ca2:c06a]', 
    '[::ffff:6ca2:c0ba]', 
    '[::ffff:6ca2:c10a]', 
    '[::ffff:6ca2:c136]', 
    '[::ffff:6ca2:c137]', 
    '[::ffff:6ca2:c3ad]', 
    '[::ffff:934e:8c12]', 
    '[::ffff:934e:8c14]', 
    '[::ffff:9a54:af90]', 
    '[::ffff:9a54:afc4]', 
    '[::ffff:9a55:6301]', 
    '[::ffff:9a55:6306]', 
    '[::ffff:9a55:6318]', 
    '[::ffff:aa72:2d08]', 
    '[::ffff:aa72:2d21]', 
    '[::ffff:aa72:2d24]', 
    '[::ffff:aa72:2d2a]', 
    '[::ffff:aa72:2e04]', 
    '[::ffff:aa72:2e29]', 
    '[::ffff:aa72:2e2a]', 
    '[::ffff:aa72:2e2d]', 
    '[::ffff:adf5:3125]', 
    '[::ffff:adf5:312f]', 
    '[::ffff:adf5:313b]', 
    '[::ffff:b912:fa07]', 
    '[::ffff:b912:fa0a]', 
    '[::ffff:b912:fa45]', 
    '[::ffff:b912:fa52]', 
    '[::ffff:b912:fa5c]', 
    '[::ffff:b9b0:1a0a]', 
    '[::ffff:b9ee:e407]', 
    '[::ffff:b9ee:e437]', 
    '[::ffff:b9ee:e455]', 
    '[::ffff:c355:1736]', 
    '[::ffff:c355:173a]', 
    '[::ffff:c355:173b]', 
    '[::ffff:c355:173f]', 
    '[::ffff:c355:1743]', 
    '[::ffff:c7d4:5a08]', 
    '[::ffff:c7d4:5a14]', 
    '[::ffff:c7d4:5a31]', 
    '[::ffff:c7d4:5a46]',
  
    'www.speedtest.net', 
    'zula.ir', 
    'www.visa.com', 
    'time.cloudflare.com', 
    'creativecommons.org', 
    'go.inmobi.com', 
    'arcane.radicalization.ir', 
    'nginx.pages.dev', 
    'hetzner-d.pages.dev', 
    'discord.com', 
    'singapore.com', 
    'nginx-a.radicalization.ir', 
    'resistance.nirevil.ir', 
    'resilience.nirevil.ir', 
    '104.17.80.227', 
    '146.19.21.248', 
    '104.18.213.153', 
    '104.19.140.234', 
    '193.9.49.48', 
    '104.18.218.1', 
    '104.21.21.59', 
    '104.18.53.121', 
    '104.18.63.116', 
    '146.19.21.234', 
    '146.19.21.97', 
    '146.19.21.9', 
    '23.227.38.21', 
    '146.19.21.218', 
    '146.19.21.248', 
    '146.19.21.67', 
    '104.17.143.121', 
    '146.19.21.248', 
    '104.17.154.253', 
    '104.18.123.101', 
    '146.19.21.100', 
    '104.16.0.6', 
    '146.19.21.113', 
    '162.159.1.94', 
    '146.19.21.9', 
    '108.162.192.8', 
    '108.162.192.16', 
    '108.162.192.28', 
    '108.162.192.40', 
    '108.162.192.57', 
    '108.162.196.133', 
    '141.101.115.30', 
    '141.101.121.87', 
    '141.101.122.104', 
    '193.9.49.48', 
    '193.9.49.67', 
    '104.16.120.114',
    '146.19.21.113',
    '188.114.97.3',
    '162.159.39.34',
    '162.159.44.158',
    '162.159.44.236',
    '162.159.45.222',
    '172.64.17.159',
    '172.64.20.155',
    '172.64.26.182',
    '172.67.1.191',
    '172.67.198.197',
    '172.66.213.38',
    '104.17.145.132', 

    '104.17.34.93',
    '104.18.34.21',
    '104.17.143.121', 
    '104.17.80.220', 
    '104.17.53.78', 
    '104.17.34.93', 
    '104.19.255.51', 
    '104.19.54.50', 
    '104.31.16.136', 
    '104.26.15.16', 
    '104.21.21.59', 
    '104.20.105.27', 
    '104.27.1.133', 
    '172.66.213.38', 
    '162.159.62.69', 
    '172.64.35.226', 
    '172.64.153.235',
  ];
  // your preferred fingerprints
  var fp = [
    'chrome',
    'firefox',
    'edge',
    'safari',
    'chrome',
    'firefox',
    'random',
    'randomized'
  ];

  var port = [
    '8443', '2083',
  ];


const configsList = [];


for (let i = 0; i < 1; i++) {

  for (let i = 0; i <10; i++) {

    var randomport = port[Math.floor(Math.random() * port.length)];
    var randomfp = fp[Math.floor(Math.random() * fp.length)];

    const shuffledVLESS = shuffleArray(Array.from(new Set(IP1)));
    const ip = shuffledVLESS.shift();

    const config = { ...defaultConfigvless, add: ip, ps: ' | SiLiCON 1 | ', port: randomport };// 1th set config profile name
  
    const queryParams = new URLSearchParams({

      path: config.path,
      security: config.tls,
      encryption: config.type,
      alpn: 'http/1.1',// preferred alpn type
      host: 'hetzner.pages.dev',// replace your hostname -1
      fp: randomfp,
      type: config.net,
      sni: 'hetzner.pages.dev',// your hostname -2
    });
    const vlessUrl = `vless://${config.id}@${config.add}:${config.port}?${queryParams.toString()}#${config.ps}`;
    configsList.push(vlessUrl);
  }

  const ipv4urlRE1 = 'https://raw.githubusercontent.com/vfarid/cf-clean-ips/main/list.json';
  const ipv4listRE1 = await fetch(ipv4urlRE1);
  const ipListDataRE1 = await ipv4listRE1.json();
  const ipv4ListRE1 = ipListDataRE1.ipv4 || [];
  const ipListRE1 = ipv4ListRE1.map(ipData => ipData.ip);
  const shuffledIPListRE1 = shuffleArray(ipListRE1);

  const ipv4urlRE2 = 'https://raw.githubusercontent.com/yebekhe/cf-clean-ip-resolver/main/list.json';
  const ipv4listRE2 = await fetch(ipv4urlRE2);
  const ipListDataRE2 = await ipv4listRE2.json();
  const ipv4ListRE2 = ipListDataRE2.ipv4 || [];
  const ipListRE2 = ipv4ListRE2.map(ipData => ipData.ip);
  const shuffledIPListRE2 = shuffleArray(ipListRE2);

  var randomfp = fp[Math.floor(Math.random() * fp.length)];

  const uniqueIPsRE1 = new Set();
  for (const ip of shuffledIPListRE1) {
    if (uniqueIPsRE1.size >= 10) {
      break;
    }
    const config = { ...defaultConfigvless, add: ip, ps: ' | SiLiCON 2 | '};// 2th set config profile name
    const queryParams = new URLSearchParams({
      path: config.path,
      security: config.tls,
      encryption: config.type,
      alpn: 'http/1.1',
      host: 'hetzner.pages.dev',// your hostname -3
      fp: randomfp,
      type: config.net,
      sni: 'hetzner.pages.dev',// your hostname -4
    });
    const vlessUrl = `vless://${config.id}@${config.add}:${config.port}?${queryParams.toString()}#${config.ps}`;
  if (!uniqueIPsRE1.has(ip)) {configsList.push(vlessUrl);
    uniqueIPsRE1.add(ip);
  }}

  const uniqueIPsRE2 = new Set();
  for (const ip of shuffledIPListRE2) {
    if (uniqueIPsRE2.size >= 10) {
      break;
    }
    const config = { ...defaultConfigvless, add: ip, ps: ' | SiLiCON 3 | '};// 3th set config profile name
    const queryParams = new URLSearchParams({
      path: config.path,
      security: config.tls,
      encryption: config.type,
      alpn: 'http/1.1',
      host: 'hetzner.pages.dev',// your hostname -5
      fp: randomfp,
      type: config.net,
      sni: 'hetzner.pages.dev',// your hostname -6
    });
    const vlessUrl = `vless://${config.id}@${config.add}:${config.port}?${queryParams.toString()}#${config.ps}`;
  if (!uniqueIPsRE2.has(ip)) {configsList.push(vlessUrl);
    uniqueIPsRE2.add(ip);
  }}
}

return new Response(btoa(configsList.join('\n')), { status: 200, headers: { 'Content-Type': 'text/plain' } });
}
