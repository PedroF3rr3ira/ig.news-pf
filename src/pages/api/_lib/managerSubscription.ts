import { query as q} from "faunadb";
import { fauna } from "../../../service/faunadb";

export async function saveSubscription(
    subscriptionid:string,
    customerId:string
){
    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_id'),
                    customerId
                )
            )
        )
    )
}