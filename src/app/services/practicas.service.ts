import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticasService {

  constructor(private http:HttpClient) { 

  }

  ejercicios: any[] = [
    {
      title: "Meditacion de Sonido Primordial",
      subTitle: "La Meditación de Sonido Primordial es una técnica de meditación basada en mantras..",
      descripcion: "Esta práctica nos permite experimentar un tipo de transformación interna que se traduce en una paz interior. Las personas recurrimos a la meditación cuando el  mundo exterior se vuelve absolutamente insostenible. Las turbulencias externas se acallan más fácilmente con esta técnica.Se trata de obligar a la mente a estar en silencio durante unos minutos. Los pensamientos que nos inundan pueden ser agobiantes. La meditación de sonido primordial hace que tengamos la mente ocupada. Cada persona recibe un mantra personal, una frase o elemento que le caracteriza. Un mantra no es nada más que un sonido o una vibración propia, que se envía al universo.A través de estos mantras podemos llegar a un nivel de conciencia nunca vistos. El mantra que se recibe en la meditación con sonido primordial es totalmente especial porque es el que se creaba en el momento o lugar de nuestro nacimiento. Los expertos en esta ciencia, a través de formulas matemáticas, hacen los cálculos exactos para otorgarte este preciado regalo.",
      img: "../../assets/img/meditacion-a a.jpg"
    },
    {
      title: "Meditación Vipassana",
      subTitle: "La meditación Vipassana se conoce a menudo como meditación del “insight” y permite ver las cosas como realmente son..",
      descripcion: "La palabra Vipassana significa ver las cosas tal como son. Es una de las técnicas de meditación más antiguas de la India. Se enseñaba en la India hace más de 2500 años como una cura universal para problemas universales, es decir, como un arte. Es un proceso de auto-purificación mediante la auto-observación. Se comienza observando la respiración natural para concentrar la mente y luego, con la conciencia agudizada, se procede a observar la naturaleza cambiante del cuerpo y de la mente y se experimentan las verdades universales de la impermanencia, el sufrimiento y la ausencia de ego. Este es el proceso de purificación: el conocimiento de la verdad a través de la experiencia directa. Todo el camino (Dhamma) es un remedio universal para problemas universales y no tiene nada que ver con ninguna religión organizada ni con una secta. Por esta razón, todo el mundo puede practicarla libremente en cualquier momento y lugar, sin que se produzcan conflictos por motivos de raza, comunidad o religión a la que se pertenezca; es igualmente beneficiosa para todos y cada uno de los que la practican.",
      img: "../../assets/img/meditacion-b a.jpg"
    },
    {
      title: "Meditación Zazen (Zen)",
      subTitle: "La traducción de la palabra japonesa “Zazen” significa “meditación sentada..",
      descripcion: "El zazen  o “meditación sentada” es la principal práctica de esta escuela. ¿Pero qué es lo que hacen los practicantes mientras se sientan muy quietos durante horas? Sucintamente podríamos decir que están estudiando su propio ser, pero quizá las palabras más elocuentes al respecto sean las del gran maestro zen Dogen:“Estudiar el camino del Buda, es estudiar el propio ser, estudiar el propio ser es olvidar el ser y olvidar el ser es ser iluminado por las diez mil cosas”.Es importante notar que cuando el maestro Dogen se refirió a las diez mil cosas hablaba de reconocer la unidad del ser con la multiplicidad de seres o cosas. Esto implica una libertad del ego y de la consciencia de dualidad para poder entrar en una comunión con el todo. Puede que suene sumamente místico pero las practicas del zen son sencillas y ancladas a la vida cotidiana. Así que vamos a adentrarnos un poco en cómo funciona.",
      img: "../../assets/img/meditacion-c.jpg"
    },
    {
      title: "Meditación Trascendental",
      subTitle: "La Meditación Trascendental es otro tipo de meditación basada en mantras",
      descripcion: "Este tipo de meditación data de hace 3.500 años en la India y ha sido difundida en nuestros días  por Maharishi Mahesh Yogi. Según cuenta Maharisi, esta técnica llegó hasta él cuando se encontraba en un retiro de silencio, en el que estuvo dos años, en el Himalaya. La práctica está basada en el yoga. Con base en esta filosofía se han fundado 1.000 centros de meditación y universidades en 130 países. El hecho de que los Beatles se hicieran discípulos suyo multiplicó su fama.La meditación trascendental es una técnica que requiere poco esfuerzo, bastante simple y a la vez muy poderosa. Es una método ausente de cualquier control mental. No se trata de un estado intelectual, se trata de dejar que los pensamientos fluyan sin ponerles atención y esperar a que se disuelvan. De esta forma, el cuerpo entra en una alerta relajación, donde se une con la mente en una conciencia plena.Podríamos decir que, dentro de las distintas modalidades de meditación, es la técnica más sencilla y eficaz. Se puede practicar dos veces al día durante aproximadamente quince minutos, en una postura cómoda y con los ojos cerrados. Es importante conseguir que la mente pueda  ir más allá del pensamiento. Se trata de procurar encontrar el espacio interior donde se encuentra nuestra creatividad y silencio profundo.",
      img: "../../assets/img/meditacion-d a.jpg"
    },
    {
      title: "Meditación Metta o del Amor Benevolente",
      subTitle: "La meditación Metta o de Amor Benevolente tiene su significado en la bondad incondicional y amistad..",
      descripcion: "Cuando practiques la meditación de Mindfulness del Amor Benevolente, comienza irradiando sensaciones de amor y ama-bilidad hacia ti mismo. Recuerda algún momento de tu vida en el que hayas sido feliz. Cuando esa sensación de felicidad surge, lo hace también una sensación de calidez y esplendor.Algunos se quejan, es algo que escuchamos mucho, de que son incapaces de recordar algún momento feliz. En ese caso, puedes imaginarte teniendo a un bebé en brazos mirándole a los ojos. ¿Tienes un sentimiento de cariño? Cuando el bebé sonríe,¿ tú lo haces también? Quédate con esa sensación.Otra opción es imaginarte agarrando una pequeña mascota. Cuando miras a la mascota, por naturaleza probablemente querrás sonreír y jugar con ella. La sensación que estás creando es de calidez, esplendor y sinceridad que irradias desde tus ojos, tu mente y tu corazón.Una vez que hayas conseguido establecer esa sensación, utilízala para desearte felicidad a ti mismo. “Que pueda estar tan feliz como estaba entonces.” Continúa con frases como: “Que pueda estar en paz”, “Que pueda estar feliz”, “Que pueda estar en calma”.¿Conoces la sensación de estar en paz y en calma? Entonces pon esa sensación y a ti mismo en el centro del corazón y desde ahí en-vuélvete en esa sensación de felicidad.Cuando esa sensación se va apagando, trae otra frase a tu mente para recordarte la sensación. “Que pueda estar tranquilo”, “Que pueda estar satisfecho”, “Que pueda estar lleno de gozo”. Y ahora date a ti mismo un “abrazo de corazón”. Deséate felicidad a ti mismo de manera sincera. Quiérete no solo de palabra. Esta sensación va a ser tu objeto de meditación.Cada vez que la sensación se vaya desvaneciendo, repite los de-seos hacia ti verbalmente en tu mente unas cuantas veces. Repite este paso las veces necesarias para que vuelva la sensación, pero ¡no hagas de ellas un mantra! Repetir las frases a modo de mantra no nos traerá la sensación que buscamos. Las frases solo nos recuerdan traer la sensación. Una vez que la sensación esté ahí, ya no necesi-tamos las frases.Hay muchos profesores de meditación que se enfocan en repetir una y otra vez las frases y esto, simplemente, no funciona. Practicar de esta manera lo convertiría en una práctica de meditación de concentración en la frase.Algunas personas tienen mucha facilidad para visualizar, mien-tras que otras no. Lo importante no es ver claramente el objeto de meditación, sino saber que está ahí. Mantén la sensación de ti mismo en el centro de tu pecho, rodeado de esa sensación de felicidad y gratificación.",
      img: "../../assets/img/meditacion-e a.jpg"
    },
    {
      title: "Meditación Kundalini",
      subTitle: "La idea principal de este tipo de meditación es que gracias a esta técnica uno despierta su energía Kundalini..",
      descripcion: "“Vibra el Cosmos. El Cosmos despejará el camino”. Este quinto sutra para la era de Acuario cierra las claves de sabiduría que nos compartió el maestro Yogi Bhajan para vivir una vida plena, saludable, feliz y espiritual a través de los cambios y las circunstancias que  enfrentamos todos los días. Como hemos visto a lo largo de las entregas pasadas dedicadas a estos sutras, existe una técnica yóguica que, practicada constantemente, nos permite mantenernos en espíritu exaltado en medio de las fluctuaciones del día a día, lo mismo mentales que provenientes de los ciclos de la naturaleza, las dinámicas sociales o los eventos históricos y culturales: meditar, respirar, meditar, respirar, meditar, respirar… y cantar; cantar fuerte, cantar con entrega, con devoción, con alegría: el cosmos escucha, porque el cosmos vibra en tu interior; ahí palpita tu gran maestro, tu verdadero gurú.Entre las diversas meditaciones de kundalini yoga que nos compartió Yogi Bhajan, existe una que él llama “la llave maestra” y que corresponde al quinto sutra, para vibrar en sintonía con la luz y creatividad infinitas del cosmos.Como vimos en la entrega anterior, somos vibración. Recibimos y nos rodean las personas, cosas, circunstancias o experiencias acordes a esa vibración. En medio de de las infinitas tonalidades del universo, hay una que nos permite permanecer unidos, “en yoga” con esa vibración originaria: el Siri Mantra o “mantra mágico”, la “llave maestra” que nos permite vibrar en sintonía con la luz y creatividad infinitas del cosmos",
      img: "../../assets/img/meditacion-f a.jpg"
    }
  ];


  videos: any[] = [
    {
      title: "ZEN",
      link: "https://www.youtube.com/watch?v=nduOxcARZXI"
    },
    {
      title: "PRIMORDIAL",
      link: "https://www.youtube.com/watch?v=jvkGrGp457s"
    },
    {
      title: "VIPASSANA",
      link: "https://www.youtube.com/watch?v=EL-u_C2fwJE"
    },
    {
      title: "TRASCENDENTAL",
      link: "https://www.youtube.com/watch?v=Xb9g7qcoOD8"
    },
    {
      title: "METTA",
      link: "https://www.youtube.com/watch?v=3NjnhUT03Ls"
    },
    {
      title: "KUNDALINI",
      link: "https://www.youtube.com/watch?v=JDV3UEugp8Y"
    }
  ];



  productos:any[] = [
    {
      title: "Yoga Mat",
      img: "https://cdn.shopify.com/s/files/1/0029/1943/2290/products/Capture_49006181-015b-4273-8edd-2502070976b4_480x480@2x.jpg?v=1590611912",
      precio: "100.000gs",
      link: ""
    },
    {
      title: "Calcetines",
      img: "https://ae01.alicdn.com/kf/H6357beffab294165870a3664e5368338l/Medias-de-Yoga-para-Mujeres-suaves-antideslizantes-calcetines-sin-dedos-para-Yoga-Pilates-Ballet-Fitness-calcet.jpg_640x640.jpg",
      precio: "300.000gs",
      link: ""
    },
    {
      title: "Mantas",
      img: "https://cool-hammocks.com/wp-content/uploads/2019/12/manta-de-yoga.jpg",
      precio: "150.000gs",
      link: ""
    },
    {
      title: "Almohadas",
      img: "https://http2.mlstatic.com/gayo-bolster-organico-para-yoga-almohada-de-apoyo-D_NQ_NP_793108-MLC27280149023_052018-F.jpg",
      precio: "250.000gs",
      link: ""
    }
  ];

  getEjercicios(){
    return this.ejercicios;
  };

  Ejercicio(i: any){
    return this.ejercicios[i];
  };

  getVideos(){
    return this.videos;
  };

  getProductos(){
    return this.productos;
  };

}
