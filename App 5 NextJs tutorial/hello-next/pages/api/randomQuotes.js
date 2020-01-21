import quotes from '../../quotes.json'

export default (req,res) => {

    res.status(200).json(
        quotes[Math.floor(Math.random()*4) + 1]
    );
}