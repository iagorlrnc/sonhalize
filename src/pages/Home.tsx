import About from '../components/About';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Contact from '../components/Contact';
import BudgetForm from "../components/BudgetForm"
import { BusinessHours } from '../components/BusinessHours';

export default function Home() {
  return (
    <>
      <About />
      <Carousel />
      <Categories />
      <Contact />
      <BusinessHours />
      <BudgetForm />
    </>
  )
}
