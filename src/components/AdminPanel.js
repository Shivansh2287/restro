import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function AdminPanel() {
  return (
    <Box
      height="100vh"
      bg="gray.50"
      width={{ base: "100%", md: "50%", sm: "20%" }}
      style={{
        margin: "auto",
      }}
      p={5}
      mt={5}
    >
      <Heading fontSize={50} mb={20}>
        Admin Pannel
      </Heading>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th fontSize={20}>Order ID</Th>
              <Th fontSize={20}>Order Number</Th>
              <Th fontSize={20}>Price</Th>
              <Th fontSize={20}>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
            <Tr>
              <Td>#5678ATF</Td>
              <Td>064</Td>
              <Td>14 KYD</Td>
              <Menu>
                <MenuButton
                  as={Button}
                  my={2}
                  mx={5}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Ordered</MenuItem>
                  <MenuItem>Cooking</MenuItem>
                  <MenuItem>Served</MenuItem>
                </MenuList>
              </Menu>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
