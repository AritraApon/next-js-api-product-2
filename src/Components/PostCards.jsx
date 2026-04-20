import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

const PostCards = ({post}) => {
    const {title ,description ,priority ,status} = post
    return (
          <Card className="w-[400px] bg-gray-300">
      <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
        {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer >
     <div className="text-lg font-bold">
       <p> {status}</p>
         <p> {priority}</p>

     </div>
      </Card.Footer>
    </Card>
    );
};

export default PostCards;