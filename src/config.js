// ============================================================
//  CONFIGURAÇÃO CENTRAL — edite SÓ este arquivo.
//
//  FOTOS: copie o arquivo para public/assets/images/... e escreva o caminho
//  a partir de "images/" (ex.: 'clients/bolo-mania/video1.png').
//  Deixe '' para mostrar a arte de reserva.
//
//  Cada foto tem o SEU link: coloque o endereço do vídeo/Reel em  link: '...'
//  Se uma foto ficar com link: '' ela leva ao "url" do cliente (perfil).
//
//  img(src, alt, { ratio, pos, fit, link })
//    ratio: '9/16' (vertical) | '4/5' | '16/9' ...   pos: '50% 20%' (enquadramento)
//    fit: 'cover' | 'contain'
//  tall = proporção vertical 9/16 (Reels/Stories)
// ============================================================
const img = (src = '', alt = '', o = {}) =>
  ({ src, alt, ratio: '4/5', pos: '50% 50%', fit: 'cover', w: 1200, h: 1500, link: '', ...o });
const tall = { ratio: '9/16', w: 1080, h: 1920 };

export const site = {
  name: 'Jota', handle: '@falajotap', title: 'PORTFÓLIO CRIATIVO',
  coords: ['7°13\'31.4"S', '39°17\'30.9"W'],
  cover: img('about/perfil1.jpg', 'Imagem de capa', { ratio: '16/9' }),               // ex.: 'cover/capa.webp'
  about: {
    title: 'SOBRE MIM',
    text: 'Olá! Sou João Pedro. Tenho 26 anos. Trabalho com criação e desenvolvimento de conteúdos audiovisuais desde 2018, unindo criatividade, técnica e olhar estético para transformar ideias em produções que comunicam, conectam e causam impacto. Busco imprimir identidade em cada projeto, valorizando os detalhes em todas as etapas da produção.',
    photo: img('about/perfil1.jpg', 'Retrato de João Pedro', { ratio: '1/1', pos: '50% 25%', link: 'https://instagram.com/falajotap' }), // ex.: 'about/joao.webp'
  },
};

export const knowledge = [
  { title: 'Pré-Produção Audiovisual', tone: 'sand', items: ['Roteirização','Storyboarding','Shot Listing','Decupagem','Planejamento criativo'] },
  { title: 'Produção', tone: 'green', items: ['Videografia','Operação de câmera','Iluminação','Gravação de vídeo'] },
  { title: 'Pós-Produção', tone: 'red', items: ['Edição de vídeo','CapCut Pro','Adobe Premiere Pro','Motion Design','DaVinci Resolve','Adobe After Effects','Photoshop','Color Grading','Color Match'] },
];

export const experience = [
  { company: 'Open Comunicação e Marketing', role: 'Editor de Vídeo', period: 'Agosto de 2024 a janeiro de 2026',
    url: 'https://instagram.com/opencomunicacaomkt',
    image: img('experience/open.jpg', 'Perfil da Open Comunicação e Marketing', { ratio: '16/10' , link: 'https://www.instagram.com/opencomunicacaomkt/' }) },   // ex.: 'experience/open.webp'
  { company: 'Manoel Filho Marketing Político', role: 'Editor de Vídeo', period: 'Janeiro de 2026 até o presente',
    url: 'https://instagram.com/eumanoelfilho',
    image: img('experience/manoel.jpg', 'Perfil da Manoel Filho Marketing Político', { ratio: '16/10', link: 'https://www.instagram.com/eumanoelfilho/' }) },
];

// ------------------------------------------------------------
//  CLIENTES — cada cliente: 1 foto principal (main) + fotos extras (extra).
//  Cada foto tem o próprio link (vídeo de referência no Instagram).
//  Para adicionar mais uma foto, copie uma linha img(...) dentro de extra: [ ].
//  Para um cliente novo, copie o bloco inteiro e crie a pasta em
//  public/assets/images/clients/<nome-do-cliente>/
// ------------------------------------------------------------
export const clients = [
  { name: 'Bolo Mania', bg: 'var(--deep)', ink: 'var(--sand)', description: '',
    url: 'https://instagram.com/bolomaniaofc',
    logo: img('clients/bolo-mania/perfil.jpg', 'Logotipo Bolo Mania', { ratio: '5/2' }),
    main: img('clients/bolo-mania/video1.png', 'Bolo Mania — destaque',
              { ...tall, link: 'https://www.instagram.com/reel/DPT5RY1ja8X/' }),   // cole aqui o link do Reel
    extra: [
      img('clients/bolo-mania/video2.png', 'Bolo Mania — campanha 1', { ...tall, link: 'https://www.instagram.com/reel/DGk1-OEuXl8/' }),
      img('clients/bolo-mania/video3.png', 'Bolo Mania — campanha 2', { ...tall, link: 'https://www.instagram.com/reel/DA5hDYTMZHV/' }),
    ] },

  { name: 'Madeireira Premium', bg: 'var(--terracotta)', ink: 'var(--sand)', description: '',
    url: 'https://instagram.com/madeireirapremium',
    logo: img('clients/madeireira-premium/perfil.jpg', 'Logotipo Madeireira Premium', { ratio: '5/2', fit:'cover'}),
    main: img('clients/madeireira-premium/video1.jpg', 'Madeireira Premium — destaque', { ...tall, link: 'https://www.instagram.com/p/DIwMsoYuv5I/' }),
    extra: [
      img('clients/madeireira-premium/video2.jpg', 'Madeireira Premium — campanha 1', { ...tall, link: 'https://www.instagram.com/p/DRC2KevDl1b/' }),
      img('clients/madeireira-premium/video3.jpg', 'Madeireira Premium — campanha 2', { ...tall, link: 'https://www.instagram.com/p/DT-nxe7Dv3n/' }),
    ] },

  { name: 'Nana Neném', bg: 'var(--sand)', ink: 'var(--terracotta)', description: '',
    url: 'https://instagram.com/bercarionananenem',
    logo: img('clients/nana-nenem/perfil.jpg', 'Logotipo Nana Neném', { ratio: '5/2', fit:'contain' }),
    main: img('clients/nana-nenem/video1.jpg', 'Nana Neném — destaque', { ...tall, link: 'https://www.instagram.com/p/DN53uJijZe8/' }),
    extra: [
      img('clients/nana-nenem/video2.jpg', 'Nana Neném — campanha 1', { ...tall, link: 'https://www.instagram.com/p/DNYSR-VsFPz/' }),
      img('clients/nana-nenem/video3.jpg', 'Nana Neném — campanha 2', { ...tall, link: 'https://www.instagram.com/reel/DMdIlL0uu6e/' }),
    ] },

  { name: 'Bosque da Serra', bg: 'var(--green)', ink: 'var(--sand)', description: '',
    url: 'https://instagram.com/bosquedaserra_',
    logo: img('clients/bosque-da-serra/perfil.jpg', 'Logotipo Bosque da Serra', { ratio: '5/2' }),
    main: img('clients/bosque-da-serra/video1.jpg', 'Bosque da Serra — destaque', { ...tall, link: '' }),
    extra: [
      img('clients/bosque-da-serra/video2.jpg', 'Bosque da Serra — campanha 1', { ...tall, link: '' }),
      img('clients/bosque-da-serra/video3.jpg', 'Bosque da Serra — campanha 2', { ...tall, link: '' }),
    ] },

  { name: 'Políticos', bg: 'var(--graphite)', ink: 'var(--sand)', description: '',
    url: '',   // perfil/site (opcional)
    logo: img('', 'Logotipo', { ratio: '0/0' }),
    main: img('clients/politicos/video1.jpg', 'Políticos — destaque', { ...tall, link: 'https://www.instagram.com/reel/DVehGN3kXjx/' }),
    extra: [
      img('clients/politicos/video2.jpg', 'Políticos — campanha 1', { ...tall, link: 'https://www.instagram.com/reel/DdKdd6ST4Ej/' }),
      img('clients/politicos/video3.jpg', 'Políticos — campanha 2', { ...tall, link: 'https://www.instagram.com/reel/DAdUTUSu3hV/' }),
    ] },
];

// ------------------------------------------------------------
//  VIDEOCLIPES — cada linha é um quadro de YouTube.
//  Cole o link ou o ID em  youtube.  Vertical? acrescente  ratio: '9/16'.
//  Sem nenhum item, aparece um quadro preparado ("Em breve").
// ------------------------------------------------------------
export const projects = [
  { title: 'EGO', artist: 'Yres & Mendxz', youtube: 'https://youtu.be/fcrWpThDOWc', url: 'https://www.instagram.com/cactusmob_/' },
];

export const contacts = [
  { label: 'Instagram', href: 'https://instagram.com/falajotap' },
  { label: 'WhatsApp', href: 'https://wa.me/5588996753871' },   // ex.: 'https://wa.me/55DDDNUMERO'
  { label: 'E-mail', href: '' },     // ex.: 'mailto:voce@email.com'
];
