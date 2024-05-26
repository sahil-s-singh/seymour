
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/home";
import First from "./pages/first";
import { AppProvider } from "./context/context";
import OnboardingScreen from "./pages/onboarding";

export default function App() {
  return (
<AppProvider>
<Routes>
        <Route path="/" element={<First text= "In the heart of a bustling city, there lived a humble tailor named Marcus. His tiny shop, tucked away in a quiet alley, was adorned with colorful spools of thread and the gentle hum of his sewing machine. Marcus was known throughout the neighborhood for his impeccable craftsmanship and warm smile.One brisk autumn morning, a mysterious stranger entered Marcus's shop. Clad in a long, tattered cloak, the stranger spoke in hushed tones, requesting a special garment to be made. Intrigued by the stranger's aura, Marcus agreed without hesitation.For days, Marcus poured his heart and soul into crafting the garment, infusing it with intricate patterns and delicate stitches. As he worked tirelessly, he couldn't shake the feeling that the garment held a deeper significance than he could fathomFinally, the day arrived when Marcus presented the finished garment to the stranger. With a solemn nod, the stranger accepted the garment and vanished into the bustling streets, leaving Marcus with a sense of curiosity and wonder.Weeks passed, and Marcus's shop buzzed with excitement as word of his extraordinary creation spread far and wide. Visitors from near and far flocked to marvel at the beauty of Marcus's workmanship, each leaving with a newfound appreciation for the art of tailoring.One evening, as Marcus closed up shop, he noticed a familiar figure standing outside. It was the mysterious stranger, now adorned in the garment Marcus had crafted. With tears in his eyes, the stranger thanked Marcus for his kindness and revealed the true nature of the garment—it was a symbol of hope and resilience, woven with threads of compassion and courage.From that day forward, Marcus's shop became more than just a place of business—it became a beacon of light in the community, where stories were shared, dreams were woven, and hearts were stitched together. And though Marcus never learned the full extent of the stranger's story, he knew that their brief encounter had changed him forever, reminding him that even in the smallest of gestures, magic could be found.!" />} />
        <Route path="/:id" element={<OnboardingScreen />}> </Route>
        <Route path="/home/:id" element={<HomeScreen />}></Route>
      </Routes>
</AppProvider>
   
  )
}