import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const CreateTicketForm = () => {

    const createTicketForm = async (formData: FormData) => {
        "use server"

        const data = {
            title: formData.get("title"),
            content: formData.get("content"),
        }

        console.log(data)
    }

    return(
        <form action={createTicketForm} className="flex flex-col gap-y-2">
            <Label htmlFor="title"></Label>
            <Input id="title" name="title" type="text" />

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" />

            <Button type="submit"></Button>
        </form>
    )
}

export default CreateTicketForm