import React from 'react';

class ImageCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {spans: 0};
        /* create a ref to access image */
        this.imageRef = React.createRef();
    }
    
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{
        /* accessing the element's height and divide it to the height of a row */
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
    }
    
    
    render(){

        /* destructuring the image url and description */
        const {urls, description} = this.props.image;

        return(
            /* the img will occupy a speceific number of rows in accordance to its height */
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;