App = {
    loading: false,
    contracts: {},

    load: async () => {
        await App.loadWeb3()
        await App.loadAccount()
        await App.loadContract()
        await App.render()
    },

    loadWeb3: async() => {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider
            web3 = new Web3(web3.currentProvider)
        } else {
            window.alert("please start metamask! =)")
        }
        // Moderm dapp browsers
        if (window.ethereum) {
            window.web3 !== new Web3(ethereum)
            try {
                await ethereum.enable()
                web3.eth.sendTransaction({/* ... */})
            } catch (error){
                // Some error here =)
            }
        }
        // Legacy web3.0 browsers
        else if(window.web3) {
            App.web3Provider = web3.currentProvider
            window.web3 = new Web3(web3.currentProvider)
            // Accounts always exposed
            web3.eth.sendTransaction({ /* ... */})
        }

        // Non dapp browsers
        else {
            console.log("Non ethereum browser detecte. Please, install MetaMask =)")
        } 
    },

    loadAccount: async () => {
        App.count = web3.eth.accounts[0]
    },

    loadContract: async () => {
        const todoList 
    }
}