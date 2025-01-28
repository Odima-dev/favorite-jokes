import Joke from "./components/Joke"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <div className="joke-container">
        <h1>My Favorite Jokes</h1>
        <Joke 
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
          upvotes={100}
        />
        
        <Joke 
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
          upvotes={3}
        />
        <Joke 
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          upvotes={18}
        />
        <Joke 
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
          upvotes={2}
        />
        <Joke 
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
          upvotes={14}
        />
        <Joke 
          setup="It’s hard to explain puns to kleptomaniacs because they always take things literally"
          punchline=""
          upvotes={0}
        />
      </div>
      <Footer />
    </>
  )
}