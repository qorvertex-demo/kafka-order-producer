import { Kafka } from "kafkajs";
const kafka = new Kafka({ clientId: "order-api", brokers: ["kafka:9092"] });
const producer = kafka.producer();

export async function placeOrder(order: any) {
  await producer.send({ topic: "orders", messages: [{ value: JSON.stringify(order) }] });
}
export async function completePayment(id: string) {
  await producer.send({ topic: "payments-completed", messages: [{ key: id, value: "paid" }] });
}
