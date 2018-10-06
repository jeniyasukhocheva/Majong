const img = [
  'if_icon_animal_ave_3316535.svg',
  'if_icon_animal_cachorro_3316536.svg',
  'if_icon_animal_camelo_3316537.svg',
  'if_icon_animal_cavalo_3316538.svg',
  'if_icon_animal_coelho_3316539.svg',
  'if_icon_animal_elefante_3316540.svg',
  'if_icon_animal_ganco_3316541.svg',
  'if_icon_animal_gato_3316542.svg',
  'if_icon_animal_girafa_3316543.svg',
  'if_icon_animal_leao_3316544.svg',
  'if_icon_animal_lobo_3316545.svg',
  'if_icon_animal_macaco_3316546.svg',
  'if_icon_animal_pato_3316547.svg',
  'if_icon_animal_peixe_3316548.svg',
  'if_icon_animal_rato_3316549.svg',
  'if_icon_animal_tartaruga_3316550.svg',
  'if_icon_animal_tigre_3316551.svg',
  'if_icon_animal_touro_3316552.svg',
  'if_icon_animal_vaca_3316553.svg',
  'if_icon_animal_zebra_3316534.svg',
];

export default function getRandomPictures(num) {
  const arr = [...img];
  const picArray = [];

  for (let pic = 0; pic < num; pic++) {
    picArray.push(...arr.splice(Math.floor(Math.random() * arr.length), 1));
  }

  return picArray;
}
