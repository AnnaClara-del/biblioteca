// leitura.js
const livros = {
  acaba: {
    titulo: "É Assim que Acaba",
    capa: "imagem/acaba.jpg",
    descricao: "É Assim que Acaba, conta a história de Lily Bloom, uma jovem que se muda de uma cidade pequena para Boston para abrir sua própria floricultura. Ela conhece Ryle Kincaid, um neurocirurgião bem-sucedido e charmoso, e os dois iniciam um relacionamento intenso. No entanto, Lily começa a perceber o lado sombrio de Ryle - seu temperamento explosivo e comportamento controlador. Paralelamente, Lily revive memórias de seu primeiro amor, Atlas Corrigan, através de seus diários adolescentes. A narrativa explora temas de amor, abuso psicológico, perdão e força para recomeçar, enquanto Lily precisa tomar decisões difíceis sobre seu relacionamento e futuro."
    
  },
  comeca: {
    titulo: "É Assim que Começa",
    capa: "imagem/comeca.jpg",
    descricao: "É Assim que Começa é a sequência altamente aguardada de: É Assim que Acaba, continuando a história de Lily Bloom e Atlas Corrigan. Dois anos após os eventos do primeiro livro, Lily agora é uma mãe solteira dedicada e dona de uma floricultura bem-sucedida, enquanto Atlas construiu uma carreira como chef renomado. O livro explora seu reencontro e a construção de um novo relacionamento, enquanto ambos lidam com traumas do passado e os desafios de criar o filho de Lily em meio às consequências do relacionamento abusivo com Ryle. A narrativa aborda temas de cura, segunda chances, paternidade e a coragem de amar novamente após experiências traumáticas"
  },
  partes: {
    titulo: "As Mil Partes do Meu Coração",
    capa: "imagem/partes.jpg",
    descricao: "Merit Voss está cansada de guardar os segredos de sua família e decide que chegou a hora de desaparecer. Mas antes de sumir do mapa, ela vai revelar um por um, tudo que a família vem guardando por anos.A cerca branca ao redor da sua casa é a única coisa normal na vida de Merit. Parte de uma família peculiar e cheia de segredos, ela mora em uma antiga igreja, batizada de Dólar Voss. A mãe, curada de um câncer, mora no porão, e o pai e o restante da família, no andar de cima. Isso inclui sua nova esposa, a ex-enfermeira da ex-mulher, o pequeno Moby, fruto desse relacionamento, o irmão mais velho, Utah, e a gêmea idêntica de Merit, Honor. E, como se a casa não tivesse cheia o bastante, ainda chegam o excêntrico Luck e o misterioso Sagan. Mas Merit sente que é o oposto de todos ali. Mas seu plano de revelar a verdade não sai como o esperado e ela deve decidir se pode dar uma segunda chance não apenas à sua família, mas também a si mesma. As mil partes do meu coração mostra que nunca é tarde para perdoar e que não existe família perfeita, por mais branca que seja a cerca."
  },
  tarde: {
    titulo: "Tarde Demais",
    capa: "imagem/tarde.jpg",
    descricao: "Para proteger o irmão, Sloan foi ao inferno e fez dele seu lar. Ela está presa em um relacionamento com Asa Jackson, um perigoso traficante, e quanto mais os dias passam, mais parece impossível enxergar uma saída. Imersa em uma casa incontrolável que mais parece um quartel general, rodeada por homens que ela teme e sem um minuto de silêncio, também parece impossível encontrar qualquer motivo para se sentir bem. Até Carter surgir em sua vida. Sloan é a melhor coisa que já aconteceu a Asa. E se você perguntasse ao rapaz, ele diria que também é a melhor coisa que já aconteceu a Sloan. Apesar de a garota não aprovar seu arriscado estilo de vida, Asa faz o que é preciso para permanecer sempre um passo a frente em seu negócio e proteger sua garota. Até Carter surgir em sua vida. A chegada de Carter pode afetar o frágil equilíbrio que Sloan lutou tanto para conquistar, mas também pode significar sua única saída de uma situação que está ficando insustentável."
  },
  verity: {
    titulo: "Verity",
    capa: "imagem/verity.jpg",
    descricao: "Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série. Para que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity - e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal. Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity?"
  },
  sem: {
    titulo: "Sem Esperança",
    capa: "imagem/sem.jpg",
    descricao: "Da autora da série Slammed, a continuação do intenso Um caso perdido. Com a ajuda Dean Holder, Sky descobriu segredos familiares chocantes e reviveu lembranças e sentimentos que tinham deixado profundas cicatrizes. Mas toda história tem dois lados. E agora chegou a hora de descobrirmos a verdade a respeito dele.Assombrado pela culpa e pelo remorso por não ter conseguido salvar Hope nem Less, Holder desenvolveu uma personalidade agressiva e desconta sua raiva em qualquer um que tente desafiá-lo. Ele nunca imaginou que voltaria a ver Hope algum dia, e não acredita na própria sorte ao se deparar com ela depois de tantos anos. No entanto, Holder não poderia supor que o sofrimento seria ainda maior após o reencontro.Em Sem esperança, o jovem revela como os acontecimentos da infância de Sky afetaram sua vida e sua família, fazendo-o buscar a própria redenção na possibilidade de salvá-la. Mas é apenas amando Sky que ele enfim será capaz de se reconciliar consigo mesmo."
  },
  confesse: {
    titulo: "Confesse",
    capa: "imagem/confesse.jpg",
    descricao: "uburn Reed perdeu tudo que era importante para ela. Na luta para reconstruir a vida destruída, ela se mantém focada em seus objetivos e não pode cometer nenhum erro. Mas ao entrar num estúdio de arte em Dallas à procura de emprego, Auburn não esperava encontrar o enigmático Owen Gentry, que lhe desperta uma intensa atração. Pela primeira vez, Auburn se vê correndo riscos e deixa o coração falar mais alto, até descobrir que Owen está encobrindo um enorme segredo. A importância do passado do artista ameaça acabar com tudo que Auburn mais ama, e a única maneira de reconstituir sua vida é mantendo Owen afastado. Para salvar o relacionamento, tudo que Owen precisa fazer é confessar. Mas talvez a confissão seja bem mais destruidora que o próprio pecado."
  },
  imperfeicoes: {
    titulo: "Todas as Suas (Im)Perfeições",
    capa: "imagem/imperfeicoes.jpg",
    descricao: "Todas as suas imperfeições narra a história de Quinn e Graham. Eles se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de conforto.Fim da dança... se o destino não tivesse outros planos para os dois. Meses mais tarde, os acordes tocam para o casal mais uma vez e eles se reencontram. Graham está convencido de que são almas gêmeas. Quinn jamais se sentiu dessa forma antes. A intensidade do sentimento os assusta, mas eles mergulham de cabeça mesmo assim. O casamento é tudo o que sonhavam, a parceria perfeita. Mesmo nos momentos difíceis, sabem que podem contar com o outro. Nenhum deles desiste do amor que sentem. Até que a primeira nota dissonante abala a sinfonia do casal. Até que Quinn parece estar disposta a trocar tudo o que é pela única coisa que não consegue ser: mãe. A luta do casal por um filho arrisca os alicerces da relação. Quinn não pode engravidar. Graham não é um candidato para adoção por conta de um erro do passado. O impasse os deixa parados no salão, no silêncio. A orquestra está em suspenso. Os dois parecem surdos para a música do amor."
  },
  amor: {
    titulo: "O Lado Feio do Amor",
    capa: "imagem/amor.jpg",
    descricao: "O maior best-seller de Collen Hoover, autora das séries Slammed e Hopeless, chega ao Brasil.Quando Tate Collins se muda para o apartamento de seu irmão, Corbin, a fim de se dedicar ao mestrado em enfermagem, não imaginava conhecer o lado feio do amor. Um relacionamento onde companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo. Mas Miles Archer, piloto de avião, vizinho e melhor amigo de Corbin, sabe ser persuasivo... apesar da armadura emocional que usa para esconder um passado de dor. O que Miles e Tate sentem não é amor à primeira vista, mas uma atração incontrolável. Em pouco tempo não conseguem mais resistir e se entregam ao desejo. O rapaz impõe duas regras: sem perguntas sobre o passado e sem esperanças para o futuro. Será um relacionamento casual. Eles têm a sintonia perfeita. Tate prometeu não se apaixonar. Mas vai descobrir que nenhuma regra é capaz de controlar o amor e o desejo."
  },
  umdia: {
    titulo: "Talvez um Dia",
    capa: "imagem/umdia.jpg",
    descricao: "Sydney acabou de completar 22 anos e já fez algo inédito em sua vida: socou a cara da ex-melhor amiga. Até hoje, ela não podia reclamar da vida. Um namorado atencioso, uma melhor amiga com quem dividia o apartamento... Tudo bem, até Sydney descobrir que as duas pessoas em quem mais confiava se pegavam quando ela não estava por perto. Até que foi um soco merecido. Sydney encontra abrigo na casa de Ridge, um músico cujo talento ela vinha admirando há um tempo. Juntos, os dois descobrem um entrosamento fora do comum para compor e uma atração que só cresce com o tempo. O problema é que Ridge tem uma namorada, e a última coisa que Sydney precisa agora é se transformar numa traidora."
  },
  agora: {
    titulo: "Talvez Agora",
    capa: "imagem/agora.jpg",
    descricao: "Talvez agora - sequência de Talvez um dia - coloca em evidência a vida dos personagens apresentados no livro anterior após Ridge e Sydney terem, finalmente, oficializado seu relacionamento. Agora que o relacionamento de Ridge com Maggie terminou, ele e Sydney estão explorando completamente essa nova liberdade de expressar seus sentimentos. No entanto, ele e Warren são o único suporte de Maggie... e devem aprender a lidar com a situação nesse novo contexto. Enquanto isso, Maggie está desfrutando da nova etapa de sua vida, embora ainda sinta algum ressentimento por tudo o que aconteceu. Após tantos anos vivendo uma relação já estável - e morna - com Ridge, Maggie não consegue prever o que a aguarda. A insegurança com relação a sua doença, o desejo de independência e a ânsia de viver novas e empolgantes experiências É nesse meio que entra Jake, o rapaz que a ajudou a cumprir o primeiro item em sua lista de coisas para fazer: pular de paraquedas. Ele está tão interessado nela quanto ela nele, mas Maggie arriscará viver um novo relacionamento e deixar o passado para trás? Por outro lado, Sydney, ao finalmente engatar a relação com Ridge, se vê realizada... Ridge representa tudo o que sempre sonhou em alguém e a química entre os dois é evidente. No entanto, a constante proximidade de Maggie a preocupa... E, mais uma vez, ela deverá ser forte para lidar com o assunto com o equilíbrio e maturidade que ele exige. Embalado por uma atmosfera musical e tratando de temas como amizade, lealdade e, principalmente, o real significado de união, Colleen Hoover retorna com a continuação de uma - ou várias? - história de amor, situações-limite e, principalmente, personagens perfeitamente imperfeitos. Talvez agora é contada não só sob um, mas vários prismas - e, como um bom românce, não podem faltar as boas doses de risos e as lágrimas."
  },
  perdido: {
    titulo: "Um Caso Perdido",
    capa: "imagem/perdido.jpg",
    descricao: "Algumas vezes, a verdade pode ser impossível de digerir. Às vezes, só às vezes, a mentira parece ser a melhor saída. A melhor opção.Aos 18 anos, Sky cataloga garotos como sabores de sorvete. Alguns são baunilha, outros, um pouco mais ousados. Mas nenhum a empolga. Aliás, o que ela gostaria mesmo de experimentar é o ensino médio, por mais que todas as suas referências sobre o assunto ― tiradas d seus amados e fiéis companheiros livros ― retratem a escola com as pinceladas de um inferno hormonal.No entanto, Sky é forte e, principalmente, está preparada, apesar dos estranhos pesadelos que a perseguem, que lhe mostram uma garotinha sempre às lágrimas. Então, quando a mãe adotiva a libera para frequentar o último ano na escola local, ela pensa em tirar o máximo da experiência. Mesmo que sua melhor amiga, e única pessoa que conhece na instituição, tenha resolvido fazer intercâmbio na Itália. Sky se vê sozinha na selva de nerds, atletas, populares... e com uma reputação nebulosa. Mas quando ela conhece Dean Holder, um rapaz cuja fama pode competir com a sua, Sky experimenta sensações de que jamais acreditou ser capaz. Ele a aterroriza e a encanta. Tudo isso com apenas um encontro. Embora tente manter distância, Holder insiste em saber tudo sobre Sky, e, incapaz de negar a estranha conexão, ela finalmente se rende ― sem saber que o comportamento errático do garoto tem uma explicação, que testará o amor dos dois e a confiança de Sky nesse caso perdido pelo qual se apaixonou. Agora, a verdade pode libertá-la. Ou simplesmente trucidá-la em Um caso perdido, uma história que retrata dois jovens com um passado devastador e um amor capaz de guiá-los numa jornada de descobertas... sobre vida, amor, confiança e, acima de tudo, o poder da verdade.."
  },
  nunca: {
    titulo: "Nunca Jamais",
    capa: "imagem/nunca.jpg",
    descricao: "Durante toda sua vida, Charlize Wynwood e Silas Nash foram melhores amigos. Aos catorze anos, se apaixonaram. Mas, da noite para o dia, se tornaram completos estranhos. O primeiro beijo, a primeira briga, o momento em que começaram a namorar... Todas as recordações que tinham um do outro parecem ter sido apagadas, desapareceram por completo. E nenhum dos dois tem ideia de como isso aconteceu ou em quem podem confiar. Desesperados e completamente perdidos, Charlie e Silas embarcam em um jogo de atuação enquanto tentam reunir informações suficientes para decifrar o enigma. Será que estão sonhando? Será que estão delirando? Ou, pior, será que alguém fez isso com eles? Logo Charlize e Silas percebem que precisam trabalhar juntos para descobrir a verdade o mais rápido possível. Mas, quanto mais aprendem sobre quem eram, mais questionam o motivo pelo qual se juntaram no passado ― e mais perguntas sobre suas vidas são deixadas sem resposta."
  },
  metrica: {
    titulo: "Métrica",
    capa: "imagem/metrica.jpg",
    descricao: "Após a morte do pai, a ausência se torna a maior companheira de Layken. A responsabilidade pela mãe e pelo irmão caçula a deixam paralisada num limbo de luto e dor. Por fora, ela parece resiliente e determinada; por dentro, está perdendo as esperanças. E se mudar do único lar que conheceu não ajuda em nada.Agora em uma nova casa, em uma nova cidade, ela precisa achar o próprio caminho. E um rapaz apaixonado por poesia pode ser o guia perfeito. Quando conhece o novo vizinho, Layken imediatamente sente uma intensa conexão. Mas logo uma revelação atordoante faz o relacionamento ser bruscamente interrompido. O dia a dia vai se tornando cada vez mais doloroso à medida que eles se esforçam para encontrar um equilíbrio entre os sentimentos que os aproximam e as forças que os separam."
  },
  pausa: {
    titulo: "Pausa",
    capa: "imagem/pausa.jpg",
    descricao: "Destinados um ao outro, Layken e Will superaram os obstáculos que ameaçavam seu amor. Mas estão prestes a aprender, no entanto, que aquilo que os uniu pode se transformar, justamente, na razão de sua separação. O amor pode não ser o bastante. Depois de testado por tragédias, proibições e desencontros, o relacionamento de Layken e Will enfrenta novos desafios. Talvez a poesida desse casal acabe num verão solitário... Sem direito a rimas ou ritmo. A ex-namorada de Will retorna arrependida de ter deixado o rapaz. E está disposta a tudo para reconquistá-lo. Insegura, Layken começa a ler novas reações no comportamento do rapaz. E na insistência para adiar a 'primeira vez' de ambos. Presos em uma ironia cruel do destino, eles precisam descobrir se o que sentem é verdadeiro ou fruto da extraordinária situação que os uniu. Será que é amor? Ou apenas compaixão? Layken passa a questionar a base de seu relacionamento com Will. E ele precisa provar seu amor para uma garota que parece não conseguir parar de 'esculpir abóboras'. Mas quando tudo parece resolvido, o casal se depara com um desafio ainda maior - e que talvez mude não só suas vidas, mas também as vidas de todos que dependem deles.."
  },
  garota: {
    titulo: "Essa Garota",
    capa: "imagem/garota.jpg",
    descricao: "O DESFECHO DA HISTÓRIA DE PAIXÃO, AMOR E MÁGOA QUE CONQUISTOU A TODOS. O amor de Will e Layken enfrentou — e venceu — proibições, impedimentos, ciúme, tragédia. Mas, agora casados, os dois se sentem seguros do sentimento que os une. Lake e Will estão em plena lua de mel, encantados com o futuro que têm pela frente. Lake quer saber tudo que há para saber sobre o marido — mesmo quando este se torna reticente quanto a despertar memórias dolorosas. Pouco a pouco, Lake convence Will a desembaraçar os nós da própria história e, pela primeira vez, seus mais íntimos sentimentos e pensamentos ganham voz. Sob a ótica de Will, revisitamos os bons e maus momentos. E conhecemos alguns fatos chocantes. O futuro de Will e Lake agora depende de como os dois lidarão com essas revelações."
  }
};

// Função para pegar o parâmetro da URL (?livro=acaba)
function getParametro(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}

const idLivro = getParametro("livro");
const livro = livros[idLivro];

if (livro) {
  document.getElementById("titulo-livro").textContent = livro.titulo;
  document.getElementById("capa-livro").src = livro.capa;
  document.getElementById("descricao-livro").textContent = livro.descricao;
} else {
  document.querySelector(".leitura-container").innerHTML = "<p>Livro não encontrado.</p>";
}