// import { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Image,
//   HStack,
//   VStack,
//   Table,
//   IconButton,
//   Input,
//   Separator,
//   Badge,
//   createToaster,
//   Span,
// } from "@chakra-ui/react";
// import { FiX, FiPlus, FiMinus } from "react-icons/fi";
// import Button from "../../components/common/Button/Button";
// import { useNavigate } from "react-router-dom";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// const toaster = createToaster({
//   placement: "top-end",
//   duration: 2000,
// });

// // Helper functions for localStorage
// const getCartFromStorage = (): CartItem[] => {
//   try {
//     const cart = localStorage.getItem("shopping_cart");
//     return cart ? JSON.parse(cart) : [];
//   } catch (error) {
//     console.error("Error reading cart from localStorage:", error);
//     return [];
//   }
// };

// const saveCartToStorage = (cart: CartItem[]): void => {
//   try {
//     localStorage.setItem("shopping_cart", JSON.stringify(cart));
//   } catch (error) {
//     console.error("Error saving cart to localStorage:", error);
//   }
// };

// const CartPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const TAX_RATE = 0.0823; // 8.23% tax

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const cart = getCartFromStorage();
//     setCartItems(cart);
//   }, []);

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );
//   const tax = subtotal * TAX_RATE;
//   const total = subtotal + tax;

//   const updateQuantity = (id: number, newQuantity: number) => {
//     if (newQuantity < 1) return;

//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: newQuantity } : item,
//     );

//     setCartItems(updatedCart);
//     saveCartToStorage(updatedCart);
//   };

//   const removeItem = (id: number) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     saveCartToStorage(updatedCart);

//     toaster.create({
//       title: "Item removed",
//       description: "Product has been removed from your cart",
//       type: "info",
//     });
//   };

//   const handleCheckout = () => {
//     toaster.create({
//       title: "Redirecting to checkout",
//       description: "Please log in to proceed further",
//       type: "warning",
//       duration: 3000,
//     });
//   };

//   return (
//     <Container maxW="100%" px={8} py={12}>
//       <VStack gap={{ base: 4, md: 6 }} mb={{ base: 6, md: 8 }} align="stretch">
//         <HStack justify="space-between" flexWrap="wrap" gap={4}>
//           <Heading as={"h1"} fontWeight="normal">
//             Shopping <Span color={"brand.primary"}> Cart</Span>
//           </Heading>
//           <Button
//             label="Continue Shopping"
//             variant="outline"
//             py={2}
//             onClick={() => navigate("/product")}
//           />
//         </HStack>
//       </VStack>

//       {cartItems.length === 0 ? (
//         <Box
//           bg="white"
//           p={{ base: 8, md: 12 }}
//           borderRadius="xl"
//           textAlign="center"
//           boxShadow="md"
//         >
//           <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.400" mb={4}>
//             🛒
//           </Text>
//           <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" mb={6}>
//             Your cart is empty
//           </Text>
//           <Button
//             label="Start Shopping"
//             variant="primary"
//             py={3}
//             onClick={() => navigate("/product")}
//           />
//         </Box>
//       ) : (
//         <VStack gap={{ base: 6, md: 8 }} align="stretch">
//           {/* Mobile Card View - Only on small screens */}
//           <Box display={{ base: "block", md: "none" }}>
//             <VStack gap={4} align="stretch">
//               {cartItems.map((item) => (
//                 <Box
//                   key={item.id}
//                   bg="white"
//                   borderRadius="lg"
//                   p={4}
//                   boxShadow="md"
//                 >
//                   <HStack gap={3} align="start" mb={3}>
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       boxSize="80px"
//                       objectFit="cover"
//                       borderRadius="md"
//                       flexShrink={0}
//                     />
//                     <VStack align="start" gap={1} flex="1">
//                       <Text
//                         fontWeight="semibold"
//                         color="gray.800"
//                         fontSize="sm"
//                       >
//                         {item.name}
//                       </Text>
//                       <Text
//                         fontWeight="bold"
//                         color="brand.primary"
//                         fontSize="lg"
//                       >
//                         ${item.price.toFixed(2)}
//                       </Text>
//                     </VStack>
//                     <IconButton
//                       aria-label="Remove item"
//                       size="sm"
//                       colorPalette="red"
//                       variant="ghost"
//                       onClick={() => removeItem(item.id)}
//                     >
//                       <FiX />
//                     </IconButton>
//                   </HStack>

//                   <HStack justify="space-between" align="center">
//                     <HStack gap={2}>
//                       <IconButton
//                         aria-label="Decrease quantity"
//                         size="sm"
//                         bg={"brand.primary"}
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity - 1)
//                         }
//                         disabled={item.quantity <= 1}
//                       >
//                         <FiMinus />
//                       </IconButton>
//                       <Input
//                         value={item.quantity}
//                         onChange={(e) => {
//                           const val = parseInt(e.target.value) || 1;
//                           updateQuantity(item.id, val);
//                         }}
//                         w="50px"
//                         size="sm"
//                         textAlign="center"
//                         fontWeight="semibold"
//                       />
//                       <IconButton
//                         aria-label="Increase quantity"
//                         size="sm"
//                         bg={"brand.primary"}
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity + 1)
//                         }
//                       >
//                         <FiPlus />
//                       </IconButton>
//                     </HStack>
//                     <Text fontWeight="bold" color="gray.800" fontSize="lg">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </Text>
//                   </HStack>
//                 </Box>
//               ))}
//             </VStack>
//           </Box>

//           {/* Desktop Table View - Only on medium screens and up */}
//           <Box
//             bg="white"
//             borderRadius="xl"
//             overflow="hidden"
//             boxShadow="md"
//             display={{ base: "none", md: "block" }}
//           >
//             <Table.Root variant="outline" striped>
//               <Table.Header bg="brand.primary">
//                 <Table.Row>
//                   <Table.ColumnHeader
//                     color="brand.white"
//                     w="50px"
//                   ></Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white">
//                     Product
//                   </Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white">
//                     Price
//                   </Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white" textAlign="center">
//                     Quantity
//                   </Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white">
//                     Total
//                   </Table.ColumnHeader>
//                 </Table.Row>
//               </Table.Header>
//               <Table.Body>
//                 {cartItems.map((item) => (
//                   <Table.Row key={item.id}>
//                     <Table.Cell>
//                       <IconButton
//                         aria-label="Remove item"
//                         size="sm"
//                         colorPalette="red"
//                         variant="ghost"
//                         onClick={() => removeItem(item.id)}
//                       >
//                         <FiX />
//                       </IconButton>
//                     </Table.Cell>
//                     <Table.Cell>
//                       <HStack gap={4}>
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           boxSize="60px"
//                           objectFit="cover"
//                           borderRadius="md"
//                         />
//                         <VStack align="start" gap={1}>
//                           <Text fontWeight="semibold" color="gray.800">
//                             {item.name}
//                           </Text>
//                         </VStack>
//                       </HStack>
//                     </Table.Cell>
//                     <Table.Cell>
//                       <Text fontWeight="semibold" color="gray.700">
//                         ${item.price.toFixed(2)}
//                       </Text>
//                     </Table.Cell>
//                     <Table.Cell>
//                       <HStack justify="center" gap={2}>
//                         <IconButton
//                           aria-label="Decrease quantity"
//                           size="sm"
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity - 1)
//                           }
//                           bg={"brand.primary"}
//                           disabled={item.quantity <= 1}
//                         >
//                           <FiMinus />
//                         </IconButton>
//                         <Input
//                           value={item.quantity}
//                           onChange={(e) => {
//                             const val = parseInt(e.target.value) || 1;
//                             updateQuantity(item.id, val);
//                           }}
//                           w="60px"
//                           textAlign="center"
//                           fontWeight="semibold"
//                         />
//                         <IconButton
//                           aria-label="Increase quantity"
//                           size="sm"
//                           bg={"brand.primary"}
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity + 1)
//                           }
//                         >
//                           <FiPlus />
//                         </IconButton>
//                       </HStack>
//                     </Table.Cell>
//                     <Table.Cell>
//                       <Text fontWeight="bold" color="gray.800" fontSize="lg">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </Text>
//                     </Table.Cell>
//                   </Table.Row>
//                 ))}
//               </Table.Body>
//             </Table.Root>
//           </Box>

//           {/* Cart Totals - Responsive */}
//           <Box
//             bg="white"
//             p={{ base: 6, md: 8 }}
//             borderRadius="xl"
//             boxShadow="md"
//             maxW={{ base: "100%", md: "500px" }}
//             ml={{ base: 0, md: "auto" }}
//             w="100%"
//           >
//             <Heading
//               fontSize={{ base: "xl", md: "2xl" }}
//               fontWeight="bold"
//               color="gray.800"
//               mb={{ base: 4, md: 6 }}
//             >
//               Cart totals
//             </Heading>

//             <VStack gap={4} align="stretch">
//               <HStack justify="space-between">
//                 <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
//                   Subtotal
//                 </Text>
//                 <Text
//                   fontSize={{ base: "md", md: "lg" }}
//                   fontWeight="semibold"
//                   color="gray.800"
//                 >
//                   ${subtotal.toFixed(2)}
//                 </Text>
//               </HStack>

//               <HStack justify="space-between" flexWrap="wrap">
//                 <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
//                   Shipping
//                 </Text>
//                 <Badge
//                   colorPalette="brand.primary"
//                   fontSize={{ base: "sm", md: "md" }}
//                   px={3}
//                   py={1}
//                 >
//                   Free Shipping
//                 </Badge>
//               </HStack>

//               <HStack justify="space-between" align="start">
//                 <VStack align="start" gap={0}>
//                   <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
//                     Tax
//                   </Text>
//                   <Text
//                     fontSize="xs"
//                     color="gray.400"
//                     display={{ base: "none", sm: "block" }}
//                   >
//                     (estimated for the United States (US))
//                   </Text>
//                 </VStack>
//                 <Text
//                   fontSize={{ base: "md", md: "lg" }}
//                   fontWeight="semibold"
//                   color="gray.800"
//                 >
//                   ${tax.toFixed(2)}
//                 </Text>
//               </HStack>

//               <Separator />

//               <HStack justify="space-between">
//                 <Text
//                   fontSize={{ base: "lg", md: "xl" }}
//                   fontWeight="bold"
//                   color="gray.800"
//                 >
//                   Total
//                 </Text>
//                 <Text
//                   fontSize={{ base: "xl", md: "2xl" }}
//                   fontWeight="bold"
//                   color="brand.primary"
//                 >
//                   ${total.toFixed(2)}
//                 </Text>
//               </HStack>

//               <Button
//                 label="Proceed to checkout"
//                 variant="primary"
//                 onClick={handleCheckout}
//               />

//               <Text
//                 fontSize="sm"
//                 color="gray.500"
//                 textAlign="center"
//                 mt={2}
//                 display={{ base: "none", sm: "block" }}
//               >
//                 Please Log-in to Proceed Further
//               </Text>
//             </VStack>
//           </Box>
//         </VStack>
//       )}
//     </Container>
//   );
// };

// export default CartPage;

//2

// import { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Image,
//   HStack,
//   VStack,
//   Table,
//   IconButton,
//   Input,
//   Separator,
//   Badge,
//   createToaster,
//   Span,
// } from "@chakra-ui/react";
// import { FiX, FiPlus, FiMinus } from "react-icons/fi";
// import Button from "../../components/common/Button/Button";
// import { useNavigate } from "react-router-dom";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// const toaster = createToaster({
//   placement: "top-end",
//   duration: 2000,
// });

// // Helper functions for localStorage
// const getCartFromStorage = (): CartItem[] => {
//   try {
//     const cart = localStorage.getItem("shopping_cart");
//     return cart ? JSON.parse(cart) : [];
//   } catch (error) {
//     console.error("Error reading cart from localStorage:", error);
//     return [];
//   }
// };

// const saveCartToStorage = (cart: CartItem[]): void => {
//   try {
//     localStorage.setItem("shopping_cart", JSON.stringify(cart));
//   } catch (error) {
//     console.error("Error saving cart to localStorage:", error);
//   }
// };

// const CartPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const TAX_RATE = 0.0823; // 8.23% tax

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const cart = getCartFromStorage();
//     setCartItems(cart);
//   }, []);

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );
//   const tax = subtotal * TAX_RATE;
//   const total = subtotal + tax;

//   const updateQuantity = (id: number, newQuantity: number) => {
//     if (newQuantity < 1) return;

//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: newQuantity } : item,
//     );

//     setCartItems(updatedCart);
//     saveCartToStorage(updatedCart);
//   };

//   const removeItem = (id: number) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     saveCartToStorage(updatedCart);

//     toaster.create({
//       title: "Item removed",
//       description: "Product has been removed from your cart",
//       type: "info",
//     });
//   };

//   const handleCheckout = () => {
//     toaster.create({
//       title: "Redirecting to checkout",
//       description: "Please log in to proceed further",
//       type: "warning",
//       duration: 3000,
//     });
//   };

//   return (
//     <Container maxW="100%" px={8} py={12}>
//       <VStack gap={{ base: 4, md: 6 }} mb={{ base: 6, md: 8 }} align="stretch">
//         <HStack justify="space-between" flexWrap="wrap" gap={4}>
//           <Heading as={"h1"} fontWeight="normal">
//             Shopping <Span color={"brand.primary"}> Cart</Span>
//           </Heading>
//           <Button
//             label="Continue Shopping"
//             variant="outline"
//             py={2}
//             onClick={() => navigate("/product")}
//           />
//         </HStack>
//       </VStack>

//       {cartItems.length === 0 ? (
//         <Box
//           bg="white"
//           p={{ base: 8, md: 12 }}
//           borderRadius="xl"
//           textAlign="center"
//           boxShadow="md"
//         >
//           <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.400" mb={4}>
//             🛒
//           </Text>
//           <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" mb={6}>
//             Your cart is empty
//           </Text>
//           <Button
//             label="Start Shopping"
//             variant="primary"
//             py={3}
//             onClick={() => navigate("/product")}
//           />
//         </Box>
//       ) : (
//         <VStack gap={{ base: 6, md: 8 }} align="stretch">
//           {/* Mobile Card View - Only on small screens */}
//           <Box display={{ base: "block", md: "none" }}>
//             <VStack gap={4} align="stretch">
//               {cartItems.map((item) => (
//                 <Box
//                   key={item.id}
//                   bg="white"
//                   borderRadius="lg"
//                   p={4}
//                   boxShadow="md"
//                 >
//                   <HStack gap={3} align="start" mb={3}>
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       boxSize="80px"
//                       objectFit="cover"
//                       borderRadius="md"
//                       flexShrink={0}
//                     />
//                     <VStack align="start" gap={1} flex="1">
//                       <Text
//                         fontWeight="semibold"
//                         color="gray.800"
//                         fontSize="sm"
//                       >
//                         {item.name}
//                       </Text>
//                       <Text
//                         fontWeight="bold"
//                         color="brand.primary"
//                         fontSize="lg"
//                       >
//                         ${item.price.toFixed(2)}
//                       </Text>
//                     </VStack>
//                     <IconButton
//                       aria-label="Remove item"
//                       size="sm"
//                       colorPalette="red"
//                       variant="ghost"
//                       onClick={() => removeItem(item.id)}
//                     >
//                       <FiX />
//                     </IconButton>
//                   </HStack>

//                   <HStack justify="space-between" align="center">
//                     <HStack gap={2}>
//                       <IconButton
//                         aria-label="Decrease quantity"
//                         size="sm"
//                         bg={"brand.primary"}
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity - 1)
//                         }
//                         disabled={item.quantity <= 1}
//                       >
//                         <FiMinus />
//                       </IconButton>
//                       <Input
//                         value={item.quantity}
//                         onChange={(e) => {
//                           const val = parseInt(e.target.value) || 1;
//                           updateQuantity(item.id, val);
//                         }}
//                         w="50px"
//                         size="sm"
//                         textAlign="center"
//                         fontWeight="semibold"
//                       />
//                       <IconButton
//                         aria-label="Increase quantity"
//                         size="sm"
//                         bg={"brand.primary"}
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity + 1)
//                         }
//                       >
//                         <FiPlus />
//                       </IconButton>
//                     </HStack>
//                     <Text fontWeight="bold" color="gray.800" fontSize="lg">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </Text>
//                   </HStack>
//                 </Box>
//               ))}
//             </VStack>
//           </Box>

//           {/* Desktop Table View - Only on medium screens and up */}
//           <Box
//             bg="white"
//             borderRadius="xl"
//             overflow="hidden"
//             boxShadow="md"
//             display={{ base: "none", md: "block" }}
//           >
//             <Table.Root variant="outline" striped>
//               <Table.Header bg="brand.primary">
//                 <Table.Row>
//                   <Table.ColumnHeader
//                     color="brand.white"
//                     w="50px"
//                   ></Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white" textStyle="size-md">
//                     Product
//                   </Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white" textStyle="size-md">
//                     Price
//                   </Table.ColumnHeader>
//                   <Table.ColumnHeader
//                     color="brand.white"
//                     textAlign="center"
//                     textStyle="size-md"
//                   >
//                     Quantity
//                   </Table.ColumnHeader>
//                   <Table.ColumnHeader color="brand.white" textStyle="size-md">
//                     Total
//                   </Table.ColumnHeader>
//                 </Table.Row>
//               </Table.Header>
//               <Table.Body>
//                 {cartItems.map((item) => (
//                   <Table.Row key={item.id}>
//                     <Table.Cell>
//                       <IconButton
//                         aria-label="Remove item"
//                         size="sm"
//                         colorPalette="red"
//                         variant="ghost"
//                         onClick={() => removeItem(item.id)}
//                       >
//                         <FiX />
//                       </IconButton>
//                     </Table.Cell>
//                     <Table.Cell textStyle="size-md">
//                       <HStack gap={4}>
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           boxSize="60px"
//                           objectFit="cover"
//                           borderRadius="md"
//                         />
//                         <VStack align="start" gap={1}>
//                           <Text fontWeight="semibold" color="gray.800">
//                             {item.name}
//                           </Text>
//                         </VStack>
//                       </HStack>
//                     </Table.Cell>
//                     <Table.Cell textStyle="size-md">
//                       <Text fontWeight="semibold" color="gray.700">
//                         ${item.price.toFixed(2)}
//                       </Text>
//                     </Table.Cell>
//                     <Table.Cell textStyle="size-md">
//                       <HStack justify="center" gap={2}>
//                         <IconButton
//                           aria-label="Decrease quantity"
//                           size="sm"
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity - 1)
//                           }
//                           bg={"brand.primary"}
//                           disabled={item.quantity <= 1}
//                         >
//                           <FiMinus />
//                         </IconButton>
//                         <Input
//                           value={item.quantity}
//                           onChange={(e) => {
//                             const val = parseInt(e.target.value) || 1;
//                             updateQuantity(item.id, val);
//                           }}
//                           w="60px"
//                           textAlign="center"
//                           fontWeight="semibold"
//                         />
//                         <IconButton
//                           aria-label="Increase quantity"
//                           size="sm"
//                           bg={"brand.primary"}
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity + 1)
//                           }
//                         >
//                           <FiPlus />
//                         </IconButton>
//                       </HStack>
//                     </Table.Cell>
//                     <Table.Cell textStyle="size-lg">
//                       <Text fontWeight="bold" color="gray.800">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </Text>
//                     </Table.Cell>
//                   </Table.Row>
//                 ))}
//               </Table.Body>
//             </Table.Root>
//           </Box>

//           {/* Cart Totals - Responsive */}
//           <Box
//             bg="white"
//             p={{ base: 6, md: 8 }}
//             borderRadius="xl"
//             boxShadow="md"
//             maxW={{ base: "100%", md: "500px" }}
//             ml={{ base: 0, md: "auto" }}
//             w="100%"
//           >
//             <Heading
//               fontSize={{ base: "xl", md: "2xl" }}
//               fontWeight="bold"
//               color="gray.800"
//               mb={{ base: 4, md: 6 }}
//             >
//               Cart totals
//             </Heading>

//             <VStack gap={4} align="stretch">
//               <HStack justify="space-between">
//                 <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
//                   Subtotal
//                 </Text>
//                 <Text
//                   fontSize={{ base: "md", md: "lg" }}
//                   fontWeight="semibold"
//                   color="gray.800"
//                 >
//                   ${subtotal.toFixed(2)}
//                 </Text>
//               </HStack>

//               <HStack justify="space-between" flexWrap="wrap">
//                 <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
//                   Shipping
//                 </Text>
//                 <Badge
//                   colorPalette="brand.primary"
//                   fontSize={{ base: "sm", md: "md" }}
//                   px={3}
//                   py={1}
//                 >
//                   Free Shipping
//                 </Badge>
//               </HStack>

//               <HStack justify="space-between" align="start">
//                 <VStack align="start" gap={0}>
//                   <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
//                     Tax
//                   </Text>
//                   <Text
//                     fontSize="xs"
//                     color="gray.400"
//                     display={{ base: "none", sm: "block" }}
//                   >
//                     (estimated for the United States (US))
//                   </Text>
//                 </VStack>
//                 <Text
//                   fontSize={{ base: "md", md: "lg" }}
//                   fontWeight="semibold"
//                   color="gray.800"
//                 >
//                   ${tax.toFixed(2)}
//                 </Text>
//               </HStack>

//               <Separator />

//               <HStack justify="space-between">
//                 <Text
//                   fontSize={{ base: "lg", md: "xl" }}
//                   fontWeight="bold"
//                   color="gray.800"
//                 >
//                   Total
//                 </Text>
//                 <Text
//                   fontSize={{ base: "xl", md: "2xl" }}
//                   fontWeight="bold"
//                   color="brand.primary"
//                 >
//                   ${total.toFixed(2)}
//                 </Text>
//               </HStack>

//               <Button
//                 label="Proceed to checkout"
//                 variant="primary"
//                 onClick={handleCheckout}
//               />

//               <Text
//                 fontSize="sm"
//                 color="gray.500"
//                 textAlign="center"
//                 mt={2}
//                 display={{ base: "none", sm: "block" }}
//               >
//                 Please Log-in to Proceed Further
//               </Text>
//             </VStack>
//           </Box>
//         </VStack>
//       )}
//     </Container>
//   );
// };

// export default CartPage;

//3

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Table,
  IconButton,
  Input,
  Separator,
  Badge,
  createToaster,
  Span,
  Grid,
  Card,
  Stack,
} from "@chakra-ui/react";
import {
  FiX,
  FiPlus,
  FiMinus,
  FiShoppingBag,
  FiHeart,
  FiTag,
  FiTruck,
  FiLock,
  FiArrowLeft,
  FiTrash2,
  FiCheck,
} from "react-icons/fi";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  originalPrice?: number;
  inStock?: boolean;
}

interface SavedItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

// Helper functions for localStorage
const getCartFromStorage = (): CartItem[] => {
  try {
    const cart = localStorage.getItem("shopping_cart");
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
    return [];
  }
};

const saveCartToStorage = (cart: CartItem[]): void => {
  try {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const getSavedItemsFromStorage = (): SavedItem[] => {
  try {
    const saved = localStorage.getItem("saved_items");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error reading saved items from localStorage:", error);
    return [];
  }
};

const saveSavedItemsToStorage = (items: SavedItem[]): void => {
  try {
    localStorage.setItem("saved_items", JSON.stringify(items));
  } catch (error) {
    console.error("Error saving saved items to localStorage:", error);
  }
};

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [isPromoValid, setIsPromoValid] = useState(false);
  
  console.log(isPromoValid);
  

  const TAX_RATE = 0.0823; // 8.23% tax
  const SHIPPING_THRESHOLD = 50; // Free shipping over $50

  // Load cart and saved items from localStorage on mount
  useEffect(() => {
    const cart = getCartFromStorage();
    const saved = getSavedItemsFromStorage();
    setCartItems(cart);
    setSavedItems(saved);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = appliedPromo ? (subtotal * appliedPromo.discount) / 100 : 0;
  const discountedSubtotal = subtotal - discount;
  const shippingCost = discountedSubtotal >= SHIPPING_THRESHOLD ? 0 : 5.99;
  const tax = discountedSubtotal * TAX_RATE;
  const total = discountedSubtotal + tax + shippingCost;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );

    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);

    toaster.create({
      title: "Item removed",
      description: "Product has been removed from your cart",
      type: "info",
    });
  };

  const saveForLater = (item: CartItem) => {
    const savedItem: SavedItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    };

    const updatedSaved = [...savedItems, savedItem];
    setSavedItems(updatedSaved);
    saveSavedItemsToStorage(updatedSaved);

    removeItem(item.id);

    toaster.create({
      title: "Saved for later",
      description: "Product moved to saved items",
      type: "success",
    });
  };

  const moveToCart = (savedItem: SavedItem) => {
    const cartItem: CartItem = {
      ...savedItem,
      quantity: 1,
      inStock: true,
    };

    const updatedCart = [...cartItems, cartItem];
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);

    const updatedSaved = savedItems.filter((item) => item.id !== savedItem.id);
    setSavedItems(updatedSaved);
    saveSavedItemsToStorage(updatedSaved);

    toaster.create({
      title: "Moved to cart",
      description: "Product added back to your cart",
      type: "success",
    });
  };

  const removeSavedItem = (id: number) => {
    const updatedSaved = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedSaved);
    saveSavedItemsToStorage(updatedSaved);

    toaster.create({
      title: "Item removed",
      description: "Product removed from saved items",
      type: "info",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    saveCartToStorage([]);
    toaster.create({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      type: "info",
    });
  };

  const applyPromoCode = () => {
    // Mock promo codes
    const promoCodes: { [key: string]: number } = {
      SAVE10: 10,
      SAVE20: 20,
      WELCOME15: 15,
    };

    const code = promoCode.toUpperCase();
    if (promoCodes[code]) {
      setAppliedPromo({ code, discount: promoCodes[code] });
      setIsPromoValid(true);
      toaster.create({
        title: "Promo code applied!",
        description: `You saved ${promoCodes[code]}% on your order`,
        type: "success",
      });
    } else {
      setIsPromoValid(false);
      toaster.create({
        title: "Invalid code",
        description: "The promo code you entered is not valid",
        type: "error",
      });
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setIsPromoValid(false);
    toaster.create({
      title: "Promo code removed",
      type: "info",
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toaster.create({
        title: "Cart is empty",
        description: "Add items to your cart before checking out",
        type: "warning",
      });
      return;
    }

    toaster.create({
      title: "Redirecting to checkout",
      description: "Please log in to proceed further",
      type: "warning",
      duration: 3000,
    });
  };

  return (
    <Container maxW="100%" px={{ base: 4, md: 8 }} py={{ base: 6, md: 12 }}>
      {/* Header Section */}
      <VStack gap={{ base: 4, md: 6 }} mb={{ base: 6, md: 8 }} align="stretch">
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <HStack gap={2}>
            <IconButton
              aria-label="Go back"
              size="sm"
              variant="ghost"
              onClick={() => navigate("/product")}
            >
              <FiArrowLeft />
            </IconButton>
            <Heading as="h1" fontWeight="normal">
              Shopping <Span color="brand.primary">Cart</Span>
              {cartItems.length > 0 && (
                <Badge
                  ml={3}
                  colorPalette="green"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </Badge>
              )}
            </Heading>
          </HStack>
          <HStack gap={2}>
            {cartItems.length > 0 && (
              <Button
                label="Clear Cart"
                variant="outline"
                py={2}
                onClick={clearCart}
                leftIcon={<FiTrash2 />}
              />
            )}
            <Button
              label="Continue Shopping"
              variant="outline"
              py={2}
              onClick={() => navigate("/product")}
            />
          </HStack>
        </HStack>

        {/* Progress Indicator */}
        {cartItems.length > 0 && subtotal < SHIPPING_THRESHOLD && (
          <Card.Root
            bg="blue.50"
            borderLeftWidth="4px"
            borderLeftColor="blue.500"
          >
            <Card.Body>
              <HStack gap={2}>
                <FiTruck color="#3182CE" size={20} />
                <Text fontSize="sm" color="blue.700">
                  Add{" "}
                  <strong>${(SHIPPING_THRESHOLD - subtotal).toFixed(2)}</strong>{" "}
                  more to get <strong>FREE SHIPPING</strong>!
                </Text>
              </HStack>
            </Card.Body>
          </Card.Root>
        )}
      </VStack>

      {cartItems.length === 0 ? (
        <Box
          bg="white"
          p={{ base: 8, md: 16 }}
          borderRadius="2xl"
          textAlign="center"
          boxShadow="lg"
        >
          <Box
            bg="gray.100"
            w={{ base: "80px", md: "120px" }}
            h={{ base: "80px", md: "120px" }}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={6}
          >
            <FiShoppingBag size={48} color="#A0AEC0" />
          </Box>
          <Heading fontSize={{ base: "xl", md: "2xl" }} color="gray.700" mb={2}>
            Your cart is empty
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.500" mb={8}>
            Looks like you haven't added anything to your cart yet
          </Text>
          <Button
            label="Start Shopping"
            variant="primary"
            py={3}
            onClick={() => navigate("/product")}
            leftIcon={<FiShoppingBag />}
          />
        </Box>
      ) : (
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={{ base: 6, md: 8 }}
        >
          {/* Left Column - Cart Items */}
          <VStack gap={{ base: 4, md: 6 }} align="stretch">
            {/* Mobile Card View */}
            <Box display={{ base: "block", md: "none" }}>
              <VStack gap={4} align="stretch">
                {cartItems.map((item) => (
                  <Card.Root key={item.id} overflow="hidden" boxShadow="md">
                    <Card.Body p={4}>
                      <HStack gap={3} align="start" mb={3}>
                        <Box position="relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            boxSize="100px"
                            objectFit="cover"
                            borderRadius="md"
                            flexShrink={0}
                          />
                          {item.originalPrice && (
                            <Badge
                              position="absolute"
                              top={1}
                              right={1}
                              colorPalette="red"
                              fontSize="xs"
                            >
                              Sale
                            </Badge>
                          )}
                        </Box>
                        <VStack align="start" gap={1} flex="1">
                          <Text
                            fontWeight="semibold"
                            color="gray.800"
                            fontSize="md"
                          >
                            {item.name}
                          </Text>
                          <HStack gap={2}>
                            <Text
                              fontWeight="bold"
                              color="brand.primary"
                              fontSize="xl"
                            >
                              ${item.price.toFixed(2)}
                            </Text>
                            {item.originalPrice && (
                              <Text
                                fontSize="sm"
                                color="gray.500"
                                textDecoration="line-through"
                              >
                                ${item.originalPrice.toFixed(2)}
                              </Text>
                            )}
                          </HStack>
                          {item.inStock !== false ? (
                            <Badge colorPalette="green" fontSize="xs">
                              <FiCheck
                                size={12}
                                style={{
                                  display: "inline",
                                  marginRight: "4px",
                                }}
                              />
                              In Stock
                            </Badge>
                          ) : (
                            <Badge colorPalette="red" fontSize="xs">
                              Out of Stock
                            </Badge>
                          )}
                        </VStack>
                      </HStack>

                      <HStack justify="space-between" align="center" mb={3}>
                        <HStack gap={2}>
                          <IconButton
                            aria-label="Decrease quantity"
                            size="sm"
                            bg="brand.primary"
                            color="white"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <FiMinus />
                          </IconButton>
                          <Input
                            value={item.quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 1;
                              updateQuantity(item.id, val);
                            }}
                            w="60px"
                            size="sm"
                            textAlign="center"
                            fontWeight="semibold"
                          />
                          <IconButton
                            aria-label="Increase quantity"
                            size="sm"
                            bg="brand.primary"
                            color="white"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <FiPlus />
                          </IconButton>
                        </HStack>
                        <Text fontWeight="bold" color="gray.800" fontSize="xl">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack gap={2} justify="space-between">
                        <Button
                          label="Save for Later"
                          variant="primary"
                          size="sm"
                          onClick={() => saveForLater(item)}
                          leftIcon={<FiHeart />}
                        />
                        <Button
                          label="Remove"
                          variant="primary"
                          size="sm"
                          colorPalette="red"
                          onClick={() => removeItem(item.id)}
                          leftIcon={<FiX />}
                        />
                      </HStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </VStack>
            </Box>

            {/* Desktop Table View */}
            <Card.Root
              overflow="hidden"
              boxShadow="lg"
              display={{ base: "none", md: "block" }}
            >
              <Table.Root variant="outline" size="lg">
                <Table.Header bg="brand.primary">
                  <Table.Row>
                    <Table.ColumnHeader color="white" textStyle="size-md">
                      Product
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="white" textStyle="size-md">
                      Price
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      color="white"
                      textAlign="center"
                      textStyle="size-md"
                    >
                      Quantity
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="white" textStyle="size-md">
                      Total
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      color="white"
                      w="50px"
                    ></Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {cartItems.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Cell textStyle="size-md">
                        <HStack gap={4}>
                          <Box position="relative">
                            <Image
                              src={item.image}
                              alt={item.name}
                              boxSize="80px"
                              objectFit="cover"
                              borderRadius="md"
                            />
                            {item.originalPrice && (
                              <Badge
                                position="absolute"
                                top={1}
                                right={1}
                                colorPalette="red"
                                fontSize="xs"
                              >
                                Sale
                              </Badge>
                            )}
                          </Box>
                          <VStack align="start" gap={1}>
                            <Text fontWeight="semibold" color="gray.800">
                              {item.name}
                            </Text>
                            {item.inStock !== false ? (
                              <Badge colorPalette="green" fontSize="xs">
                                <FiCheck
                                  size={12}
                                  style={{
                                    display: "inline",
                                    marginRight: "4px",
                                  }}
                                />
                                In Stock
                              </Badge>
                            ) : (
                              <Badge colorPalette="red" fontSize="xs">
                                Out of Stock
                              </Badge>
                            )}
                            <Button
                              label="Save for Later"
                              // variant="ghost"
                              variant="primary"
                              size="xs"
                              onClick={() => saveForLater(item)}
                              leftIcon={<FiHeart size={14} />}
                            />
                          </VStack>
                        </HStack>
                      </Table.Cell>
                      <Table.Cell textStyle="size-md">
                        <VStack align="start" gap={0}>
                          <Text
                            fontWeight="bold"
                            color="brand.primary"
                            fontSize="lg"
                          >
                            ${item.price.toFixed(2)}
                          </Text>
                          {item.originalPrice && (
                            <Text
                              fontSize="sm"
                              color="gray.500"
                              textDecoration="line-through"
                            >
                              ${item.originalPrice.toFixed(2)}
                            </Text>
                          )}
                        </VStack>
                      </Table.Cell>
                      <Table.Cell textStyle="size-md">
                        <HStack justify="center" gap={2}>
                          <IconButton
                            aria-label="Decrease quantity"
                            size="sm"
                            bg="brand.primary"
                            color="white"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <FiMinus />
                          </IconButton>
                          <Input
                            value={item.quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 1;
                              updateQuantity(item.id, val);
                            }}
                            w="70px"
                            textAlign="center"
                            fontWeight="semibold"
                          />
                          <IconButton
                            aria-label="Increase quantity"
                            size="sm"
                            bg="brand.primary"
                            color="white"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <FiPlus />
                          </IconButton>
                        </HStack>
                      </Table.Cell>
                      <Table.Cell textStyle="size-lg">
                        <Text fontWeight="bold" color="gray.800" fontSize="xl">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton
                          aria-label="Remove item"
                          size="sm"
                          colorPalette="red"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                        >
                          <FiX />
                        </IconButton>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Card.Root>

            {/* Saved Items Section */}
            {savedItems.length > 0 && (
              <Card.Root boxShadow="md">
                <Card.Header bg="gray.50" borderBottomWidth="1px">
                  <Heading fontSize="lg" fontWeight="semibold">
                    <FiHeart
                      style={{ display: "inline", marginRight: "8px" }}
                    />
                    Saved for Later ({savedItems.length})
                  </Heading>
                </Card.Header>
                <Card.Body>
                  <Grid
                    templateColumns={{
                      base: "1fr",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                  >
                    {savedItems.map((item) => (
                      <Card.Root key={item.id} size="sm" variant="outline">
                        <Card.Body>
                          <Image
                            src={item.image}
                            alt={item.name}
                            w="100%"
                            h="120px"
                            objectFit="cover"
                            borderRadius="md"
                            mb={3}
                          />
                          <Text
                            fontWeight="semibold"
                            fontSize="sm"
                            mb={2}
                            // noOfLines={2}
                          >
                            {item.name}
                          </Text>
                          <Text fontWeight="bold" color="brand.primary" mb={3}>
                            ${item.price.toFixed(2)}
                          </Text>
                          <Stack gap={2}>
                            <Button
                              label="Move to Cart"
                              variant="primary"
                              size="sm"
                              onClick={() => moveToCart(item)}
                            />
                            <Button
                              label="Remove"
                              variant="outline"
                              size="sm"
                              onClick={() => removeSavedItem(item.id)}
                            />
                          </Stack>
                        </Card.Body>
                      </Card.Root>
                    ))}
                  </Grid>
                </Card.Body>
              </Card.Root>
            )}
          </VStack>

          {/* Right Column - Order Summary */}
          <VStack
            gap={{ base: 4, md: 6 }}
            align="stretch"
            position="sticky"
            top={4}
            h="fit-content"
          >
            {/* Promo Code */}
            <Card.Root boxShadow="lg">
              <Card.Header bg="gray.50" borderBottomWidth="1px">
                <HStack gap={2}>
                  <FiTag />
                  <Heading fontSize="lg" fontWeight="semibold">
                    Promo Code
                  </Heading>
                </HStack>
              </Card.Header>
              <Card.Body>
                {appliedPromo ? (
                  <HStack
                    p={3}
                    bg="green.50"
                    borderRadius="md"
                    justify="space-between"
                    borderWidth="1px"
                    borderColor="green.200"
                  >
                    <VStack align="start" gap={0}>
                      <Text fontWeight="bold" color="green.700" fontSize="sm">
                        {appliedPromo.code}
                      </Text>
                      <Text fontSize="xs" color="green.600">
                        {appliedPromo.discount}% discount applied
                      </Text>
                    </VStack>
                    <IconButton
                      aria-label="Remove promo"
                      size="xs"
                      variant="ghost"
                      colorPalette="red"
                      onClick={removePromoCode}
                    >
                      <FiX />
                    </IconButton>
                  </HStack>
                ) : (
                  <VStack gap={3}>
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      textTransform="uppercase"
                    />
                    <Button
                      label="Apply Code"
                      variant="outline"
                      w="100%"
                      onClick={applyPromoCode}
                      disabled={!promoCode}
                    />
                    <Text fontSize="xs" color="gray.500">
                      Try: SAVE10, SAVE20, WELCOME15
                    </Text>
                  </VStack>
                )}
              </Card.Body>
            </Card.Root>

            {/* Order Summary */}
            <Card.Root boxShadow="lg">
              <Card.Header bg="gray.50" borderBottomWidth="1px">
                <Heading fontSize="xl" fontWeight="bold">
                  Order Summary
                </Heading>
              </Card.Header>
              <Card.Body>
                <VStack gap={4} align="stretch">
                  <HStack justify="space-between">
                    <Text fontSize="md" color="gray.600">
                      Subtotal ({cartItems.length}{" "}
                      {cartItems.length === 1 ? "item" : "items"})
                    </Text>
                    <Text fontSize="md" fontWeight="semibold" color="gray.800">
                      ${subtotal.toFixed(2)}
                    </Text>
                  </HStack>

                  {appliedPromo && (
                    <HStack justify="space-between" color="green.600">
                      <Text fontSize="md">
                        Discount ({appliedPromo.discount}%)
                      </Text>
                      <Text fontSize="md" fontWeight="semibold">
                        -${discount.toFixed(2)}
                      </Text>
                    </HStack>
                  )}

                  <HStack justify="space-between">
                    <HStack gap={2}>
                      <FiTruck />
                      <Text fontSize="md" color="gray.600">
                        Shipping
                      </Text>
                    </HStack>
                    {shippingCost === 0 ? (
                      <Badge colorPalette="green" fontSize="sm">
                        FREE
                      </Badge>
                    ) : (
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.800"
                      >
                        ${shippingCost.toFixed(2)}
                      </Text>
                    )}
                  </HStack>

                  <HStack justify="space-between">
                    <VStack align="start" gap={0}>
                      <Text fontSize="md" color="gray.600">
                        Tax (8.23%)
                      </Text>
                      <Text fontSize="xs" color="gray.400">
                        (US estimate)
                      </Text>
                    </VStack>
                    <Text fontSize="md" fontWeight="semibold" color="gray.800">
                      ${tax.toFixed(2)}
                    </Text>
                  </HStack>

                  <Separator />

                  <HStack justify="space-between" py={2}>
                    <Text fontSize="xl" fontWeight="bold" color="gray.800">
                      Total
                    </Text>
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color="brand.primary"
                    >
                      ${total.toFixed(2)}
                    </Text>
                  </HStack>

                  <Button
                    label="Proceed to Checkout"
                    variant="primary"
                    size="lg"
                    onClick={handleCheckout}
                    leftIcon={<FiLock />}
                  />

                  <VStack gap={2} mt={2}>
                    <HStack fontSize="xs" color="gray.500" gap={1}>
                      <FiLock size={12} />
                      <Text>Secure checkout powered by Stripe</Text>
                    </HStack>
                    <Text fontSize="xs" color="gray.500" textAlign="center">
                      Please log in to complete your purchase
                    </Text>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Trust Badges */}
            <Card.Root boxShadow="md" bg="gray.50">
              <Card.Body>
                <VStack gap={3}>
                  <HStack gap={2} fontSize="sm">
                    <FiTruck color="#266F5D" />
                    <Text color="gray.700">Free shipping over $50</Text>
                  </HStack>
                  <HStack gap={2} fontSize="sm">
                    <FiLock color="#266F5D" />
                    <Text color="gray.700">Secure payment</Text>
                  </HStack>
                  <HStack gap={2} fontSize="sm">
                    <FiCheck color="#266F5D" />
                    <Text color="gray.700">30-day return policy</Text>
                  </HStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </Grid>
      )}
    </Container>
  );
};

export default CartPage;
