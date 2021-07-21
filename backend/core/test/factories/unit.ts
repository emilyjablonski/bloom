import { Factory } from "fishery"
import { nanoid } from "nanoid"
import { Unit } from "../../src/units/entities/unit.entity"
import { BaseEntity } from "typeorm"

type NonDbUnit = Omit<Unit, keyof BaseEntity>

export default Factory.define<NonDbUnit>(() => ({
  id: nanoid(),
  amiPercentage: "80.0",
  annualIncomeMin: "58152.0",
  monthlyIncomeMin: "4858.0",
  floor: 2,
  annualIncomeMax: "103350.0",
  maxOccupancy: 2,
  minOccupancy: 1,
  monthlyRent: "2429.0",
  numBathrooms: 1,
  numBedrooms: null,
  number: "265",
  priorityType: null,
  sqFeet: "750",
  status: "available",
  unitType: "oneBdrm",
  createdAt: new Date(),
  updatedAt: new Date(),
  amiChartId: 1,
  monthlyRentAsPercentOfIncome: null,
  listing: null,
}))
