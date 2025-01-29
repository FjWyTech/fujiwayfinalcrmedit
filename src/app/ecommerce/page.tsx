'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Grid, List, Filter, Plus, Search, Tag, ShoppingBag, DollarSign } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Premium Laptop',
    category: 'Electronics',
    price: 1299.99,
    stock: 45,
    image: 'https://picsum.photos/400/300?random=1',
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 199.99,
    stock: 120,
    image: 'https://picsum.photos/400/300?random=2',
    status: 'In Stock',
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Wearables',
    price: 299.99,
    stock: 5,
    image: 'https://picsum.photos/400/300?random=3',
    status: 'Low Stock',
  },
  {
    id: 4,
    name: 'Gaming Console',
    category: 'Gaming',
    price: 499.99,
    stock: 0,
    image: 'https://picsum.photos/400/300?random=4',
    status: 'Out of Stock',
  },
  {
    id: 5,
    name: 'Tablet Pro',
    category: 'Electronics',
    price: 799.99,
    stock: 28,
    image: 'https://picsum.photos/400/300?random=5',
    status: 'In Stock',
  },
  {
    id: 6,
    name: 'Camera Kit',
    category: 'Photography',
    price: 1499.99,
    stock: 12,
    image: 'https://picsum.photos/400/300?random=6',
    status: 'In Stock',
  },
]

const metrics = [
  { id: 1, label: 'Total Products', value: '2,847', icon: Tag },
  { id: 2, label: 'Total Orders', value: '1,234', icon: ShoppingBag },
  { id: 3, label: 'Total Revenue', value: '$45,678', icon: DollarSign },
]

export default function EcommercePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800'
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800'
      case 'Out of Stock':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#333333]">E-commerce</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-[#E9ECEF] rounded-lg focus:outline-none focus:border-[#0D6EFD]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6C757D]" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#F8F9FA] text-[#333333] rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <div className="flex items-center space-x-2 border border-[#E9ECEF] rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'bg-[#0D6EFD] text-white'
                  : 'bg-[#F8F9FA] text-[#6C757D]'
              } rounded-l-lg`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${
                viewMode === 'list'
                  ? 'bg-[#0D6EFD] text-white'
                  : 'bg-[#F8F9FA] text-[#6C757D]'
              } rounded-r-lg`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#0D6EFD] text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.id} className="bg-white rounded-xl border border-[#E9ECEF] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#6C757D] text-sm">{metric.label}</p>
                  <h3 className="text-2xl font-semibold text-[#333333] mt-1">{metric.value}</h3>
                </div>
                <div className="p-2 bg-[#F8F9FA] rounded-lg">
                  <Icon className="w-5 h-5 text-[#0D6EFD]" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-[#E9ECEF] overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-[#333333]">{product.name}</h3>
                    <p className="text-sm text-[#6C757D]">{product.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-semibold text-[#333333]">${product.price}</span>
                  <span className="text-sm text-[#6C757D]">{product.stock} in stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#E9ECEF] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#F8F9FA]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9ECEF]">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-[#333333]">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#333333] font-medium">${product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#6C757D]">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
} 