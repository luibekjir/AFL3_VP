import { PrismaClient } from '../generated/prisma';
import { calculateEta } from '../src/utils/eta-util';

const prisma = new PrismaClient();

async function main() {

  const c1 = await prisma.customer.create({
    data: { name: "Alice", phone: "0811111111" }
  });

  const c2 = await prisma.customer.create({
    data: { name: "Bob", phone: "0822222222" }
  });

  const c3 = await prisma.customer.create({
    data: { name: "Charlie", phone: "0833333333" }
  });

  const r1 = await prisma.restaurant.create({
    data: {
      name: "McDonalds",
      description: "Fast-food restaurant",
      isOpen: true
    }
  });

  const r2 = await prisma.restaurant.create({
    data: {
      name: "KFC",
      description: "Fried chicken restaurant",
      isOpen: true
    }
  });

  const r3 = await prisma.restaurant.create({
    data: {
      name: "BurgerKing",
      description: "Premium burgers",
      isOpen: false
    }
  });


  const ordersData = [
    { customer_id: c1.id, restaurant_id: r1.id, items: 2 },
    { customer_id: c1.id, restaurant_id: r2.id, items: 5 },
    { customer_id: c2.id, restaurant_id: r3.id, items: 3 },
    { customer_id: c3.id, restaurant_id: r1.id, items: 1 },
    { customer_id: c3.id, restaurant_id: r2.id, items: 4 }
  ];

  for (const o of ordersData) {
    await prisma.order.create({
      data: {
        customer_id: o.customer_id,
        restaurant_id: o.restaurant_id,
        items: o.items,
        eta: calculateEta(o.items),
        ordered_at: new Date(), 
      }
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
