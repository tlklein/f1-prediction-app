"use client";

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  driver: z
    .string({
      required_error: "Please select an driver.",
    })
    .email(),
  team: z
    .string({
      required_error: "Please select an team.",
    })
    .email(),
  position: z
    .string({
      required_error: "Please select the grid position.",
    })
    .email(),
  circuit: z
    .string({
      required_error: "Please select a circuit.",
    })
    .email(),
})

export function DriverForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <br></br>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="driver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose the driver.</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified driver to display." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="h-[250px]">
                  <SelectItem value="esteban_ocon">Esteban Ocon</SelectItem>
                  <SelectItem value="pierre_gasly">Pierre Gasly</SelectItem>
                  <SelectItem value="fernano_alonso">Fernano Alonso</SelectItem>
                  <SelectItem value="charles_leclerc">Charles Leclerc</SelectItem>
                  <SelectItem value="kevin_magnussen">Kevin Magnussen</SelectItem>
                  <SelectItem value="nico_hulkenberg">Nico Hulkenberg</SelectItem>
                  <SelectItem value="lando_norris">Lando Norris</SelectItem>
                  <SelectItem value="oscar_pastri">Oscar Piastri</SelectItem>
                  <SelectItem value="george_russell">George Russell</SelectItem>
                  <SelectItem value="lewis_hamilton">Lewis Hamilton</SelectItem>
                  <SelectItem value="max_verstappen">Max Verstappen</SelectItem>
                  <SelectItem value="sergio_perez">Sergio Perez</SelectItem>
                  <SelectItem value="daniel_ricciardo">Daniel Ricciardo</SelectItem>
                  <SelectItem value="yuki_tsunoda">Yuki Tsunoda</SelectItem>
                  <SelectItem value="guanyu_zhou">Guanyu Zhou</SelectItem>
                  <SelectItem value="valtteri_bottas">Valtteri Bottas</SelectItem>
                  <SelectItem value="alex_albon">Alex Albon</SelectItem>
                  <SelectItem value="logan_sarge">Logan Sargeant</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <br></br>
        <FormField
          control={form.control}
          name="team"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose the constructor.</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified team to display." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="h-[250px]">
                  <SelectItem value="mclaren">McLaren</SelectItem>
                  <SelectItem value="kick_sauber">Kick Sauber</SelectItem>
                  <SelectItem value="williams">Williams</SelectItem>
                  <SelectItem value="ferrai">Ferrari</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="red_bull">Red Bull</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="aston_martin">Aston Martin</SelectItem>
                  <SelectItem value="rb">RB</SelectItem>
                  <SelectItem value="haas">HAAS</SelectItem>
                  <SelectItem value="alpine">Alpine</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <br></br>
        <FormField
          control={form.control}
          name="circuit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose the circuit.</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified circuit to display." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="h-[250px]">
                  <SelectItem value="abu_dhabi">Abu Dhabi</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="las_vegas">Las Vegas</SelectItem>
                  <SelectItem value="brazil">Brazil</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="united_states">United States</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="azerbaijan">Azerbaijan</SelectItem>
                  <SelectItem value="Italy">Italy</SelectItem>
                  <SelectItem value="netherlands">Netherlands</SelectItem>
                  <SelectItem value="belgium">Belgium</SelectItem>
                  <SelectItem value="Hungary">Hungary</SelectItem>
                  <SelectItem value="great_britain">Great Britain</SelectItem>
                  <SelectItem value="austria">Austria</SelectItem>
                  <SelectItem value="spain">Spain</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="monaco">Monaco</SelectItem>
                  <SelectItem value="emilia_romagna">Emilia-Romagna</SelectItem>
                  <SelectItem value="miami">Miami</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="saudi_arabia">Saudi Arabia</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <br></br>
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose the grid position.</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified grid position to display." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="h-[250px]">
                  <SelectItem value="one">One</SelectItem>
                  <SelectItem value="two">Two</SelectItem>
                  <SelectItem value="three">Three</SelectItem>
                  <SelectItem value="four">Four</SelectItem>
                  <SelectItem value="five">Five</SelectItem>
                  <SelectItem value="six">Six</SelectItem>
                  <SelectItem value="seven">Seven</SelectItem>
                  <SelectItem value="eight">Eight</SelectItem>
                  <SelectItem value="nine">Nine</SelectItem>
                  <SelectItem value="ten">Ten</SelectItem>
                  <SelectItem value="eleven">Eleven</SelectItem>
                  <SelectItem value="twelve">Twelve</SelectItem>
                  <SelectItem value="thirteen">Thirteen</SelectItem>
                  <SelectItem value="fourteen">Fourteen</SelectItem>
                  <SelectItem value="fifteen">Fifteen</SelectItem>
                  <SelectItem value="sixteen">Sixteen</SelectItem>
                  <SelectItem value="seventeen">Seventeen</SelectItem>
                  <SelectItem value="eighteen">Eighteen</SelectItem>
                  <SelectItem value="nineteen">Nineteen</SelectItem>
                  <SelectItem value="twenty">Twenty</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <br></br>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
