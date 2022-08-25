import React, {useState, useEffect} from "react"
import ServiceList from "./ServiceList"
import ServiceDetails from "./ServiceDetails"
import {FcServices, FcMultipleDevices, FcGlobe, FcManager, FcReddit} from "react-icons/fc";

const Long = `I'm baby prism raclette flannel, cornhole shabby chic twee four dollar toast. Vibecession organic raw denim gluten-free salvia seitan selfies butcher twee ramps. Sus keytar butcher fixie, gentrify direct trade ugh palo santo thundercats salvia cold-pressed aesthetic yuccie. Selvage umami seitan air plant, try-hard health goth pickled cornhole literally hell of fit helvetica.

Lomo migas yuccie, forage narwhal same air plant food truck edison bulb. Woke kitsch kombucha hexagon etsy hoodie, tonx ethical stumptown polaroid shoreditch banjo activated charcoal franzen irony. Church-key 90's sustainable keffiyeh YOLO vape post-ironic franzen coloring book lyft small batch. Crucifix letterpress fashion axe lomo.

Thundercats swag yes plz health goth waistcoat hexagon 90's bushwick. Knausgaard readymade twee scenester selfies. Mumblecore copper mug small batch pabst. Wayfarers praxis gentrify butcher pork belly keffiyeh chartreuse adaptogen quinoa. Meggings four dollar toast flannel lumbersexual Brooklyn selvage church-key twee put a bird on it four loko mumblecore hexagon gochujang. Chambray vinyl chillwave, hammock seitan everyday carry vibecession poke poutine fashion axe biodiesel next level 3 wolf moon pour-over street art. Edison bulb dreamcatcher typewriter ascot pok pok.

Umami live-edge kitsch, butcher selfies synth taxidermy meditation ethical blue bottle farm-to-table pinterest vibecession. Yuccie vegan health goth vibecession, 8-bit kale chips tacos fit fashion axe whatever swag man braid fanny pack single-origin coffee. Lo-fi cray salvia wayfarers twee tumeric banjo church-key small batch gochujang readymade. Aesthetic irony etsy, synth blue bottle jean shorts vibecession praxis. Affogato poke tote bag vape waistcoat wolf hexagon try-hard iceland meggings celiac thundercats four loko. Taxidermy mukbang palo santo, ugh chillwave tbh pork belly salvia affogato sustainable seitan raw denim. Etsy heirloom butcher beard.

Fixie tumblr Brooklyn forage fam. Bushwick direct trade iPhone, kitsch 90's banh mi artisan hell of truffaut distillery dreamcatcher semiotics retro trust fund. Cold-pressed waistcoat banh mi ramps mumblecore. Plaid biodiesel yes plz deep v next level. Cornhole swag yuccie, pickled heirloom street art church-key kinfolk irony synth. Food truck heirloom copper mug, blue bottle authentic jianbing flannel scenester bruh kombucha post-ironic.`

const Services = [
  {
    title: "Browser",
    icon: <FcGlobe />,
    short:
      "I'm baby prism raclette flannel, cornhole shabby chic twee four dollar toast. Vibecession organic raw denim gluten-free salvia seitan selfies butcher twee ramps. Sus keytar butcher fixie, gentrify direct trade ugh palo santo thundercats salvia cold-pressed aesthetic yuccie. Selvage umami seitan air plant, try-hard health goth pickled cornhole literally hell of fit helvetica.",
  },
  {
    title: "Multi Platform",
    icon: <FcMultipleDevices />,
    short:
      "Lomo migas yuccie, forage narwhal same air plant food truck edison bulb. Woke kitsch kombucha hexagon etsy hoodie, tonx ethical stumptown polaroid shoreditch banjo activated charcoal franzen irony. Church-key 90's sustainable keffiyeh YOLO vape post-ironic franzen coloring book lyft small batch. Crucifix letterpress fashion axe lomo.",
  },
  {
    title: "API",
    icon: <FcServices />,
    short:
      "Thundercats swag yes plz health goth waistcoat hexagon 90's bushwick. Knausgaard readymade twee scenester selfies. Mumblecore copper mug small batch pabst. Wayfarers praxis gentrify butcher pork belly keffiyeh chartreuse adaptogen quinoa. Meggings four dollar toast flannel lumbersexual Brooklyn selvage church-key twee put a bird on it four loko mumblecore hexagon gochujang. Chambray vinyl chillwave, hammock seitan everyday carry vibecession poke poutine fashion axe biodiesel next level 3 wolf moon pour-over street art. Edison bulb dreamcatcher typewriter ascot pok pok.",
  },
  {
    title: "RPA",
    icon: <FcReddit />,
    short:
      "Umami live-edge kitsch, butcher selfies synth taxidermy meditation ethical blue bottle farm-to-table pinterest vibecession. Yuccie vegan health goth vibecession, 8-bit kale chips tacos fit fashion axe whatever swag man braid fanny pack single-origin coffee. Lo-fi cray salvia wayfarers twee tumeric banjo church-key small batch gochujang readymade. Aesthetic irony etsy, synth blue bottle jean shorts vibecession praxis. Affogato poke tote bag vape waistcoat wolf hexagon try-hard iceland meggings celiac thundercats four loko. Taxidermy mukbang palo santo, ugh chillwave tbh pork belly salvia affogato sustainable seitan raw denim. Etsy heirloom butcher beard",
  },
  {
    title: "Consulting",
    icon: <FcManager />,
    short:
      "Fixie tumblr Brooklyn forage fam. Bushwick direct trade iPhone, kitsch 90's banh mi artisan hell of truffaut distillery dreamcatcher semiotics retro trust fund. Cold-pressed waistcoat banh mi ramps mumblecore. Plaid biodiesel yes plz deep v next level. Cornhole swag yuccie, pickled heirloom street art church-key kinfolk irony synth. Food truck heirloom copper mug, blue bottle authentic jianbing flannel scenester bruh kombucha post-ironic.",
  },
]

const AllServices = ({activeService, location}) => {
    const [service, setService] = useState(activeService || Services[0])

    useEffect( () => {
        let new_state = service
        setService(new_state)
    }, [service])

    const handleService = (title) => {
        let details = Services.filter( item => item.title === title)[0]
        setService(details)
    }


  //const location = window.location.pathname

  return (
    <section className="services-container">
      <ServiceList services={Services}  handleService={handleService}  activeService={service} />
      <ServiceDetails service={service} location={location} long={Long} />
    </section>
  )
}

export default AllServices
