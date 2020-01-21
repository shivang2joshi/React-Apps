const initState = {
    posts : [
        { id: '1', title: "Learn React in 1 second !", body:"I'm kidding obviously that's impossible. "},
        { id: '2', title: "Nice Joke in Trending", body:" Just read above post.....Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ad recusandae placeat soluta aut cumque. Mollitia, porro iste, delectus nemo illum aliquid labore quam quidem cupiditate cumque at ea aliquam?"},
        { id: '3', title: "Elon Musk tweets Hi from the Mars!", body:"sends a selfie with Thanos, says 'he has quite the logic but he melted down by the Hyperloop and Underground tunnels solution' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ad recusandae placeat soluta aut cumque. Mollitia, porro iste, delectus nemo illum aliquid labore quam quidem cupiditate cumque at ea aliquam?"}
    ]
}

const rootReducer = (state = initState, action )=>{

    return state;
}

export default rootReducer;